import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavAdmin from '../components/NavAdmin';
import TableReservation from '../components/TableReservation';
import Footer from '../../../../components/Dashboard/Footer';
import SearchBar from '../../../../components/Dashboard/SearchBar';
import Pagination from '../../../../components/Dashboard/Pagination';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';

function DataUserPage() {
  const axiosPrivate = useAxiosPrivate();
  const [reservations, setReservations] = useState();
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
  }, [location.search, navigate, location]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-3/4">
          <div className="flex flex-col mt-7 font-bold text-[#006769] justify-center items-center">
            <h1>TABLE DATA RESERVATION</h1>
            <h1>EXPLORE METROPLEX</h1>
          </div>
          <SearchBar />
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
