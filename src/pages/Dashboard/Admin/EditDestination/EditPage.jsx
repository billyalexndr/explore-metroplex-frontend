import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import CardInputDestination from '../components/CardInputDestination';

const EditPage = () => {
  return (
    <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="sticky top-0 flex flex-wrap items-center justify-between w-full p-2 mx-auto bg-white border-b">
        <Link
          to="/admin"
          className="flex items-center p-2 space-x-3 rtl:space-x-reverse"
        >
          <IoIosArrowBack size={30} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Back to Home
          </span>
        </Link>
      </div>
      <CardInputDestination />
    </div>
  );
};
export default EditPage;
