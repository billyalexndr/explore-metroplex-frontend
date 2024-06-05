import React from 'react';

const CardInputDestination = () => {
  return (
    <div className="flex items-center justify-center flex-grow mt-1 mb-8 border-gray-200 md:bg-white">
      <div className="w-2/4 mt-8 bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="flex items-center justify-center w-full p-6 text-white mb-2 text-2xl font-bold tracking-tight rounded-t-lg bg-[#40A578]">
          EXPLORE METROPLEX
        </h5>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="destination-name"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              Destination Name
            </label>
            <input
              type="text"
              id="destination-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
            />
          </div>
        </div>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="city"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              City
            </label>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 flex-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown button
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="price-ticket"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              Price Ticket
            </label>
            <input
              type="text"
              id="price-ticket"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
            />
          </div>
        </div>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="price-ticket"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              Total Visitors
            </label>
            <input
              type="text"
              id="price-ticket"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
            />
          </div>
        </div>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="price-ticket"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              Descriptions
            </label>
            <textarea
              type="text"
              rows={3}
              id="price-ticket"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
            />
          </div>
        </div>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="destination-name"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              type="text"
              id="destination-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
            />
          </div>
        </div>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="destination-name"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              Link Maps
            </label>
            <input
              type="text"
              id="destination-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
            />
          </div>
        </div>
        <div className="flex flex-row w-full px-6 py-2">
          <div className="flex items-center w-full gap-5">
            <label
              htmlFor="destination-name"
              className="w-[150px] text-sm font-medium text-gray-900"
            >
              Upload File
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none flex-1"
              id="default_size"
              type="file"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add/Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInputDestination;
