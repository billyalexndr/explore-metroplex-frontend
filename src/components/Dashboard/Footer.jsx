import React from 'react';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <footer className="bg-[#9DB0B7]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 max-w-xs">
            <Link to="#" className="flex items-center mb-4">
              <span className="self-center text-2xl italic font-semibold whitespace-nowrap text-white">
                Explore Metroplex
              </span>
            </Link>
            <p className="text-white">
              "Discover the Essence of Urban Adventure in the Metroplex!"
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:flex md:justify-end">
            <div>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Destinations
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 text-white dark:text-white mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link to="#" className="hover:underline">
                    @explore_metroplex
                  </Link>
                </li>
                <li className="mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 text-white dark:text-white mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.3"
                      d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>
                  <Link to="#" className="hover:underline">
                    exploremetroplex@gmail.com
                  </Link>
                </li>
                <li className="mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 text-white dark:text-white mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.3"
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                  <Link to="#" className="hover:underline">
                    021-3425-123
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2024{' '}
          <Link to="https://flowbite.com/" className="hover:underline">
            C624-PS005™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default footer;
