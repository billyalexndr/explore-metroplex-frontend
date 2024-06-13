import React from 'react';
import PropTypes from 'prop-types';

function DetailDestination({
  name,
  address,
  photo,
  visitor,
  capacity,
  updatedAt,
  description,
  price,
  map,
}) {
  return (
    <>
      <div className="flex justify-between p-3 mb-3 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-emerald-700 dark:text-white">
            {name}
          </h1>
          <p className="text-lg mt-2.5"> {address}</p>
        </div>
      </div>
      <div className="flex md:flex-row">
        <div className="w-1/2 bg-white">
          <img className="rounded-md w-full h-[350px]" src={photo} alt={name} />
          <div className="flex justify-between my-3">
            <div>
              <p className="mb-3 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                Total visitors: {visitor}
              </p>
              <p className="text-sm italic text-gray-700 dark:text-gray-400">
                Update{' '}
                {new Date(updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-4 bg-white">
          <div className="mb-5 text-lg text-justify text-gray-900 dark:text-white">
            <p>{description}</p>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
              />
            </svg>
            <p className="text-lg font-bold">Rp.{price}/Person</p>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <p className="text-lg font-bold">Capacity: {capacity} People</p>
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
                fillRule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clipRule="evenodd"
              />
            </svg>
            <iframe
              src={map}
              className="w-full h-[200px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </div>
    </>
  );
}

DetailDestination.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  visitor: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  map: PropTypes.string.isRequired,
};

export default DetailDestination;
