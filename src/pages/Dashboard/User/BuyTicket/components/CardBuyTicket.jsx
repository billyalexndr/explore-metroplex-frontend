import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useInput from '../../../../../hooks/useInput';

function CardInputDestination({ destination, price, onSubmit }) {
  const [name, onNameChange] = useInput('');
  const [phone, onPhoneChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [ticket, onTicketChange] = useInput(1);
  const [subtotal, setSubtotal] = useState(0);
  const [reservedAt, setReservedAt] = useState();

  useEffect(() => {
    const calculateSubtotal = () => {
      const total = price * ticket;
      setSubtotal(total);
    };
    calculateSubtotal();
  }, [price, ticket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      phone,
      email,
      ticket,
      subtotal,
      reservedAt,
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
                Destination
              </label>
              <input
                type="text"
                id="destination-name"
                value={destination}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="name"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={name}
                onChange={onNameChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="phone"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                No. Handphone
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={phone}
                onChange={onPhoneChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="email"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                E-Mail
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={email}
                onChange={onEmailChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="date"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Date
              </label>
              {/* <div className="relative flex-1">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker
                  type="text"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div> */}
              <div className="relative flex-1">
                <DatePicker
                  selected={reservedAt}
                  onChange={(date) => setReservedAt(date)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholderText="Select date"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="email"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Total Tickets
              </label>
              <input
                type="number"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={ticket}
                onChange={onTicketChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full px-6 py-2">
            <div className="flex items-center w-full gap-5">
              <label
                htmlFor="email"
                className="w-[150px] text-sm font-medium text-gray-900"
              >
                Subtotal
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-1 p-2.5"
                value={subtotal}
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

CardInputDestination.propTypes = {
  destination: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CardInputDestination;
