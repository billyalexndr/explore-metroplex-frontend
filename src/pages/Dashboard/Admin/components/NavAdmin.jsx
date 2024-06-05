import React from 'react';
import { Link } from 'react-router-dom';

const NavAdmin = () => {
  return (
    <nav className="sticky top-0 z-20 w-full bg-white border-b border-gray-200 drop-shadow-md start-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-[#006769] text-2xl font-semibold whitespace-nowrap dark:text-white">
            EXPLORE METROPLEX
          </span>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center">
              <Link
                to="/admin"
                className="block py-2 px-3 text-[#006769] rounded md:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/data-user"
                className="block py-2 px-3 text-[#006769] rounded hover:font-bold"
              >
                Data User
              </Link>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <img
                  class="w-10 h-10 rounded-full"
                  src="/images/ronaldo.jpg"
                  alt=""
                />
                <div class="font-medium text-[#006769] dark:text-white">
                  <div>ADMIN</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
