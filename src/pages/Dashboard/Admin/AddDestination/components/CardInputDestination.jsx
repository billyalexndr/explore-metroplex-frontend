import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';
import useInput from '../../../../../hooks/useInput';
import 'react-dropdown/style.css';

function CardInputDestination({ onSubmit }) {
  const [name, onNameChange] = useInput('');
  const [city, setCity] = useState('');
  const [price, onPriceChange] = useInput(0);
  const [capacity, onCapacityChange] = useInput(0);
  const [description, onDescriptionChange] = useInput('');
  const [address, onAddressChange] = useInput('');
  const [map, onMapChange] = useInput('');
  const [file, setFile] = useState();

  const options = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'];

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
                onChange={onNameChange}
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
              <div className="relative flex-1">
                <Dropdown
                  options={options}
                  onChange={(option) => setCity(option.value)}
                  value={city}
                  placeholder="-- choose city --"
                  controlClassName="w-full text-center"
                  menuClassName="w-full text-center"
                />
              </div>
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
                onChange={onPriceChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="price-ticket"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Capacity
              </label>
              <input
                type="number"
                id="price-ticket"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={capacity}
                onChange={onCapacityChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="price-ticket"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={description}
                type="text"
                rows={3}
                id="price-ticket"
                onChange={onDescriptionChange}
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
                value={address}
                onChange={onAddressChange}
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
                value={map}
                onChange={onMapChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="destination-name"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Upload Image
              </label>
              <input
                className="flex-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="default_size"
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

CardInputDestination.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardInputDestination;
