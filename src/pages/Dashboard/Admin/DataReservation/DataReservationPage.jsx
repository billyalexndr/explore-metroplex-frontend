import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TableReservation from '../components/TableReservation';
import SearchBar from '../../../../components/Dashboard/SearchBar';
import Pagination from '../../../../components/Dashboard/Pagination';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import Loading from '../../../../components/Loading';

function DataUserPage() {
  const axiosPrivate = useAxiosPrivate();
  const [reservations, setReservations] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getReservations = async () => {
      try {
        const reservations = await api.getReservations({
          axiosPrivate,
          signal: controller.signal,
          query,
        });
        if (isMounted) {
          setReservations(reservations);
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
  }, [location.search, navigate, location]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center mx-10">
          <div className="flex flex-col mt-7 font-bold text-[#006769] justify-center items-center">
            <h1>TABLE DATA RESERVATION</h1>
            <h1>EXPLORE METROPLEX</h1>
          </div>
          <div className="flex items-center justify-center w-2/4 mt-7">
            <SearchBar />
          </div>
          <div className="mt-7">
            <TableReservation reservations={reservations} />
          </div>
          <div className="flex items-center justify-center w-full mt-7">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataUserPage;
