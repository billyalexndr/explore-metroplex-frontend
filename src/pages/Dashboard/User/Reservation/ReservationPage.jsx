import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import ReservationList from './components/ReservationList';
import NavUser from '../components/NavUser';

function ReservationPage() {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);
  const [activeTab, setActiveTab] = useState('BOOKED');

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getReservations = async () => {
      try {
        const fetchedReservations = await api.getReservations({
          axiosPrivate, signal: controller.signal, id,
        });
        if (isMounted) {
          setReservations(fetchedReservations);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      getReservations();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  const handleCancelReservation = async (reservationId) => {
    try {
      await api.cancelReservation({ axiosPrivate, id: reservationId });
      setReservations((prevReservations) =>
        prevReservations.map((reservation) => (
          reservation.id === reservationId ? { ...reservation, status: 'CANCELED' } : reservation
      )));
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const filterReservations = (status) =>
    reservations.filter((reservation) => reservation.status === status);

  const tabs = ['BOOKED', 'DONE', 'CANCELED'];

  return (
    <div>
      <NavUser />
      <div className="tabs my-6 flex space-x-4 justify-center items-center">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-green-800 text-white' : 'border-2 border-green-700 text-green-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <ReservationList
          reservations={filterReservations(activeTab)}
          activeTab={activeTab}
          onCancel={handleCancelReservation}
        />
      </div>
    </div>
  );
}

export default ReservationPage;
