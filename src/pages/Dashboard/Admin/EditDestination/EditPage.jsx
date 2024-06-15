import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import CardEditDestination from './components/CardEditDestination';
import api from '../../../../utils/api';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import Loading from '../../../../components/Loading';

function EditPage() {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const [tour, setTour] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);
  const [loading, setLoading] = useState(true);

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

    if (effectRun.current) {
      setLoading(true);
      getTour();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  const onSubmitHandler = async ({
    name,
    city,
    price,
    capacity,
    description,
    address,
    map,
    file,
  }) => {
    try {
      await api.updateTour({
        axiosPrivate,
        signal: null,
        id,
        name,
        city,
        price,
        capacity,
        description,
        address,
        map,
        image: file,
      });
    } catch (error) {
      alert(error.response.data.message);
    }
    navigate('/admin');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="sticky top-0 flex flex-wrap items-center justify-between w-full p-2 mx-auto bg-white border-b">
        <Link
          to="/admin"
          className="flex items-center p-2 space-x-3 rtl:space-x-reverse"
        >
          <IoIosArrowBack size={30} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Back to Home
          </span>
        </Link>
      </div>
      <CardEditDestination destination={tour} onSubmit={onSubmitHandler} />
    </div>
  );
}

export default EditPage;
