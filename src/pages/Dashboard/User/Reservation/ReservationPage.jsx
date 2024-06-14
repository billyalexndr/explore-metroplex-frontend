import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import ReservationList from './components/ReservationList';
import Loading from '../../../../components/Loading';

function ReservationPage() {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
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
          axiosPrivate,
          signal: controller.signal,
          id,
        });
        if (isMounted) {
          setReservations(fetchedReservations);
          setLoading(false);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      setLoading(true);
      getReservations();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleCancelReservation = async (reservationId) => {
    try {
      await api.cancelReservation({ axiosPrivate, id: reservationId });
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation.id === reservationId
            ? { ...reservation, status: 'CANCELED' }
            : reservation,
        ),
      );
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const filterReservations = (status) =>
    reservations.filter((reservation) => reservation.status === status);

  const tabs = ['BOOKED', 'DONE', 'CANCELED'];

  return (
    <div>
      <div className="flex items-center justify-center my-6 space-x-4 tabs">
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
