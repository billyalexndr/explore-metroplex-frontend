import React from 'react';
import { Link } from 'react-router-dom';

function CloseButton() {
  return (
    <div className="close-button absolute right-0 p-5 lg:p-5">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Link>
    </div>
  );
}

export default CloseButton;
