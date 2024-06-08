import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../../../../utils';

function StarRating({ rate }) {
  const stars = [];

  for (let i = 0; i < rate; i += 1) {
    stars.push(
      <svg
        key={i}
        className="w-[24px] h-[24px] text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2.284L9.39 8.66H2.56l6.68 4.889L6.3 19.716 12 15.526l5.7 4.19-2.94-6.167 6.68-4.889h-6.83L12 2.284z"
          clipRule="evenodd"
        />
      </svg>,
    );
  }

  return <div className="flex items-center">{stars}</div>;
}

function FeedbackCard({ photo, name, createdAt, rate, text }) {
  return (
    <div className="p-4 mb-4 bg-white border rounded-lg shadow-lg">
      <div className="flex items-center mb-2">
        <img
          src={photo}
          alt=""
          className="w-12 h-12 mr-4 rounded-full"
        />
        <div className="w-full">
          <div className="flex justify-between">
            <span className="block mr-auto text-lg font-bold">{name}</span>
            <span className="ml-auto text-sm text-gray-500">{postedAt(createdAt)}</span>
          </div>
          <StarRating rate={rate} />
        </div>
      </div>
      <p className="text-gray-700">
        {text}
      </p>
    </div>
  );
}

StarRating.propTypes = {
  rate: PropTypes.number.isRequired,
};

FeedbackCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedbackCard;
