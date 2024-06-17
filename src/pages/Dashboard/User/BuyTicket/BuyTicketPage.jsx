import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import CardBuyTicket from './components/CardBuyTicket';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import Loading from '../../../../components/Loading';

function BuyTicketPage() {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getTour = async () => {
      try {
        const tour = await api.getTourById({ signal: controller.signal, id });
        if (isMounted) {
          setTour(tour);
          setLoading(false);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    setLoading(true);
    getTour();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const onSubmitHandler = async ({
    name,
    phone,
    email,
    ticket,
    subtotal,
    reservedAt,
  }) => {
    try {
      await api.createReservation({
        axiosPrivate,
        signal: null,
        id,
        name,
        phone,
        email,
        ticket,
        subtotal,
        reservedAt,
      });
      navigate('/reservation');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="sticky top-0 flex flex-wrap items-center justify-between w-full p-2 mx-auto bg-white border-b">
        <Link
          to={`/detail-destination/${id}`}
          className="flex items-center p-2 space-x-3 rtl:space-x-reverse"
        >
          <IoIosArrowBack size={30} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Back to Home
          </span>
        </Link>
      </div>
      {tour && (
        <CardBuyTicket
          destination={tour.name}
          price={tour.price}
          onSubmit={onSubmitHandler}
        />
      )}
    </div>
  );
}

export default BuyTicketPage;
