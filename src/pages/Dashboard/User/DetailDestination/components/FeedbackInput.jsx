import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FeedbackInput({ onSubmit }) {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ message, rating });
    setMessage('');
    setRating(0);
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="message"
          className="block mb-2 text-2xl font-bold text-emerald-700 dark:text-white"
        >
          Give Feedback
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-green-800 focus:ring-green-500 focus:border-green-500 dark:bg-white dark:border-green-800 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <h2 className="my-5 text-lg font-bold text-emerald-700 dark:text-white">
          Rating:
        </h2>
        <div className="flex items-center mb-5">
          {[1, 2, 3, 4, 5].map((value) => (
            <React.Fragment key={value}>
              <input
                className="hidden"
                type="radio"
                id={`star-${value}`}
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => handleRatingChange(value)}
                required
              />
              <label htmlFor={`star-${value}`} className="cursor-pointer">
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill={rating >= value ? '#FFD700' : 'none'}
                    d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                  />
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <button
          type="submit"
          className="w-full mt-2 text-white font-bold text-lg bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

FeedbackInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FeedbackInput;
