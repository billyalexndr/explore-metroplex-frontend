import React from 'react';
import PropTypes from 'prop-types';

function TableReservation({ reservations }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-sm text-center text-white uppercase bg-[#006769] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Destination
            </th>
            <th scope="col" className="px-6 py-3">
              Account
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
          </tr>
        </thead>
        <tbody>
          {reservations && reservations.length > 0 ? (
            reservations.map((reservation, index) => (
              <tr
                key={reservation.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{reservation.tour.name}</td>
                <td className="px-6 py-4">{reservation.user.name}</td>
                <td className="px-6 py-4">{reservation.name}</td>
                <td className="px-6 py-4">{reservation.phone}</td>
                <td className="px-6 py-4">{reservation.email}</td>
                <td className="px-6 py-4">{reservation.ticket}</td>
                <td className="px-6 py-4">{reservation.subtotal}</td>
                <td className="px-6 py-4">
                  {new Date(reservation.reservedAt).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </td>
                <td className="px-6 py-4 text-center">{reservation.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center">
                No tours found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

TableReservation.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableReservation;
