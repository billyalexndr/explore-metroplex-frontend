import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DestUserCard({ id, photo, name, description, rating }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isNameExpanded, setIsNameExpanded] = useState(false);

  return (
    <div className="w-1/4 h-[360px] bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="object-cover w-full h-40 rounded-t-lg"
          src={photo}
          alt={id}
        />
      </a>
      <div className="flex flex-col justify-between h-40 p-5">
        <div>
          <Link to={`/detail-destination/${id}`}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {isNameExpanded
                ? name
                : `${name.slice(0, 25)}${name.length > 25 ? '...' : ''}`}
            </h5>
          </Link>
          <p className="mb-3 text-base font-normal text-justify text-gray-700">
            {isDescriptionExpanded
              ? description
              : `${description.slice(0, 90)}${description.length > 90 ? '...' : ''}`}
          </p>
        </div>
        {rating > 0.0 && (
          <div className="flex items-center justify-between mt-2">
            <span className="flex items-center gap-2 text-yellow-400">
              <FaStar size={20} />
              <p className="text-base text-black">{rating.toFixed(1)}</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

DestUserCard.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default DestUserCard;
