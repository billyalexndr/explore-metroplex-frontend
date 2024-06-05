import React from 'react';

function DetailDestination() {
  return (
    <>
      <div className="flex mb-3 p-3 md:flex-row justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-emerald-700 dark:text-white">
            TAMAN MINI INDAH INDONESIA
          </h1>
          <p className="text-lg mt-2.5">
            {' '}
            Jl. Taman Mini Indonesia Indah, Ceger, Kec. Cipayung, Kota Jakarta
            Timur
          </p>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold rounded-full text-sm px-5 py-2.5"
          >
            Buy Ticket
          </button>
        </div>
      </div>
      <div className="flex md:flex-row">
        <div className="w-1/2 bg-white">
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1714715636406-6b5e562c86dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTc0Njc5NzN8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
          <div className="my-3 flex justify-between">
            <div>
              <p className="mb-3 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                Total visitors: 2.4JT
              </p>
              <p className="italic text-sm text-gray-700 dark:text-gray-400">
                Update June 4, 2024
              </p>
            </div>
            <div>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="ml-4 w-1/2 bg-white">
          <div className="text-lg mb-5 text-gray-900 dark:text-white">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex mb-5">
            <svg
              className="w-6 h-6 font-bold text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
              />
            </svg>
            <p className="text-lg font-bold">50K</p>
          </div>
          <div className="flex">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="https://www.google.com/maps/@?api=1&map_action=map&center=37.7749,-122.4194&zoom=12"
              target="_blank"
            >
              <img
                src="https://www.google.com/maps/vt/data=37.7749,-122.4194,12"
                alt="Map"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailDestination;
