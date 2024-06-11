import React from 'react';
import PropTypes from 'prop-types';

function ReservationList({ reservations, activeTab, onCancel }) {
  return (
    <div className="relative p-6 overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-gray-50 shadow-md">
        <thead className="text-sm text-center text-gray-700 uppercase bg-green-700 text-white dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Destination
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Ticket
            </th>
            <th scope="col" className="px-6 py-3">
              Subtotal
            </th>
            <th scope="col" className="px-6 py-3">
              Reserved At
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            {activeTab === 'BOOKED' ? (
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {reservations && reservations.length > 0 ? (
            reservations.map((reservation, index) => (
              <tr
                key={reservation.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{reservation.tour.name}</td>
                <td className="px-6 py-4">{reservation.name}</td>
                <td className="px-6 py-4">{reservation.phone}</td>
                <td className="px-6 py-4">{reservation.email}</td>
                <td className="px-6 py-4 text-center">{reservation.ticket}</td>
                <td className="px-6 py-4 text-center">{reservation.subtotal}</td>
                <td className="px-6 py-4 text-center">
                  {new Date(reservation.reservedAt).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </td>
                <td className="px-6 py-4 text-center">{reservation.status}</td>
                {activeTab === 'BOOKED' ? (
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => onCancel(reservation.id)}
                    >
                      Cancel
                    </button>
                  </td>
                ) : null}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="px-6 py-4 text-center">
                Ticket not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

ReservationList.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      ticket: PropTypes.number.isRequired,
      subtotal: PropTypes.number.isRequired,
      reservedAt: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ReservationList;
