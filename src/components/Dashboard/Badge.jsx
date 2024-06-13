import React from 'react';
import PropTypes from 'prop-types';

function Badge({ text, onClick, isSelected }) {
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer bg-white border-2 ${isSelected ? 'border-[#40A578] text-green-800' : 'border-gray-300 text-gray-500'} text-sm font-medium me-2 px-5 py-2 rounded-full hover:border-[#40A578] hover:text-green-800`}
    >
      {text}
    </span>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Badge;
