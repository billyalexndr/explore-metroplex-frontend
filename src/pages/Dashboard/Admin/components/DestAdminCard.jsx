import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DestAdminCard({ id, photo, name, description, rating, onDelete }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isNameExpanded, setIsNameExpanded] = useState(false);

  return (
    <div className="w-full h-[360px] bg-white border border-gray-200 rounded-lg shadow flex flex-col">
      <Link to={`/detail-destination-admin/${id}`}>
        <img
          className="object-cover w-full h-40 rounded-t-lg"
          src={photo}
          alt={id}
        />
      </Link>
      <div className="flex flex-col justify-between flex-grow p-5">
        <div className="flex-grow overflow-hidden">
          <Link to={`/detail-destination-admin/${id}`}>
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              {isNameExpanded
                ? name
                : `${name.slice(0, 20)}${name.length > 20 ? '...' : ''}`}
            </h5>
          </Link>
          <p className="text-base font-normal text-justify text-gray-700">
            {isDescriptionExpanded
              ? description
              : `${description.slice(0, 90)}${description.length > 90 ? '...' : ''}`}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="flex items-center gap-2 text-yellow-400">
            {rating > 0.0 && (
              <div className="flex items-center gap-1">
                <FaStar size={20} />
                <p className="text-base text-black">{rating.toFixed(1)}</p>
              </div>
            )}
          </span>
          <div className="flex gap-2">
            <Link
              to={`/edit-destination/${id}`}
              className="font-medium hover:underline"
            >
              <FaEdit />
            </Link>
            <button
              type="button"
              className="font-medium text-red-600 hover:underline"
              onClick={() => onDelete({ id })}
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

DestAdminCard.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DestAdminCard;
