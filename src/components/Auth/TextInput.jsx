import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ type, id, placeholder, icon, inputHandler }) {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#006769] focus:border-[#006769] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#006769] dark:focus:border-[#006769]"
          placeholder={placeholder}
          onChange={inputHandler}
          required
        />
      </div>
    </div>
  );
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default TextInput;
