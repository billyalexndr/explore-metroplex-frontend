import React from 'react';
import PropTypes from 'prop-types';

function ReservationList({ reservations, activeTab, onCancel }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reservations.map((reservation) => (
        <div key={reservation.id} className="bg-white shadow-md rounded-lg p-6">
          <img src={reservation.tour.photo} alt={reservation.tour.id} />
          <p className="font-bold text-xl mb-2">{reservation.tour.name}</p>
          <p className="font-semibold text-lg mb-2">{reservation.name}</p>
          <p><span className="font-semibold">Phone:</span> {reservation.phone}</p>
          <p><span className="font-semibold">Email:</span> {reservation.email}</p>
          <p><span className="font-semibold">Tickets:</span> {reservation.ticket}</p>
          <p><span className="font-semibold">Subtotal:</span> Rp.{reservation.subtotal}</p>
          <p><span className="font-semibold">Reserved At:</span> {new Date(reservation.reservedAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          </p>
          {activeTab === 'BOOKED' ? (
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => onCancel(reservation.id)}
            >
              Cancel Reservation
            </button>
          ) : null}
        </div>
      ))}
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
