import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, changePage, forcePage }) {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName="inline-flex -space-x-px text-sm"
      previousLinkClassName="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      nextLinkClassName="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      pageLinkClassName="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 border border-gray-300"
      activeClassName="flex items-center justify-center text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
      forcePage={forcePage}
    />
  );
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  forcePage: PropTypes.number.isRequired,
};

export default Pagination;
