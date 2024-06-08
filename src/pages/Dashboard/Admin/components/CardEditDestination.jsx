import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CardEditDestination({ destination, onSubmit }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [map, setMap] = useState('');
  const [file, setFile] = useState();

  useEffect(() => {
    if (destination) {
      setName(destination.name);
      setCity(destination.city);
      setPrice(destination.price);
      setCapacity(destination.capacity);
      setDescription(destination.description);
      setAddress(destination.address);
      setMap(destination.map);
    }
  }, [destination]);

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      city,
      price,
      capacity,
      description,
      address,
      map,
      file,
    });
  };

  return (
    <div className="flex items-center justify-center flex-grow mt-1 mb-8 border-gray-200 md:bg-white">
      <div className="w-2/4 mt-8 bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="flex items-center justify-center w-full p-6 text-white mb-2 text-2xl font-bold tracking-tight rounded-t-lg bg-[#40A578]">
          EXPLORE METROPLEX
        </h5>
        <form onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="destination-city"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                id="destination-city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="price-ticket"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Ticket Price
              </label>
              <input
                type="number"
                id="price-ticket"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="capacity"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Capacity
              </label>
              <input
                type="number"
                id="capacity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="description"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                type="text"
                rows={3}
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="address"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="map"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Link Maps
              </label>
              <input
                type="text"
                id="map"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={map}
                onChange={(e) => setMap(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="file"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Upload Image
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none flex-1"
                id="file"
                type="file"
                onChange={fileSelected}
              />
            </div>
          </div>
          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

CardEditDestination.propTypes = {
  destination: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    price: PropTypes.number,
    capacity: PropTypes.number,
    description: PropTypes.string,
    address: PropTypes.string,
    map: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CardEditDestination;
