import React, { useState } from 'react';
import PropTypes from 'prop-types';

function StoryCard({ title, profilePicture, name, description }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

  return (
    <div
      href="#"
      className="block mt-4 w-[300px] h-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {isTitleExpanded
          ? title
          : `${title.slice(0, 20)}${title.length > 20 ? '...' : ''}`}
      </h5>
      <div className="flex items-center gap-5 mb-2">
        <img
          className="w-10 h-10 rounded-full"
          src={profilePicture}
          alt="Rounded avatar"
        />
        <p className="text-xl font-bold">{name}</p>
      </div>
      <p className="mt-3 text-base font-normal text-justify text-gray-700 dark:text-gray-400">
        {isDescriptionExpanded
          ? description
          : `${description.slice(0, 150)}${description.length > 150 ? '...' : ''}`}
      </p>
    </div>
  );
}

StoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StoryCard;
