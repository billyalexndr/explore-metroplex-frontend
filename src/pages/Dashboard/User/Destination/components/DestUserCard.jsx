import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaEdit,
  FaRegTrashAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DestUserCard({ id, photo, name, description, rating }) {
  return (
    <div className="w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={photo} alt={id} />
      </a>
      <div className="p-5">
        <Link to={`/detail-destination/${id}`}>
          <h5 className="mb-2 text-justify text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 text-justify text-base font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between">
          <div>
            <span className="flex items-center justify-center gap-2 text-yellow-400">
              <FaStar size={20} />
              <p className="mt-1 text-base text-black">{rating.toFixed(1)}</p>
            </span>
          </div>
        </div>
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
