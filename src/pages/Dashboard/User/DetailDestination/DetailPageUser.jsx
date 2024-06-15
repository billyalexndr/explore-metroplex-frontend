import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DetailDestination from './components/DetailDestination';
import FeedbackInput from './components/FeedbackInput';
import FeedbackList from './components/FeedbackList';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import Loading from '../../../../components/Loading';

function DetailPageUser() {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getDetailTour = async () => {
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
      getDetailTour();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  const onSubmitHandler = async ({ message, rating }) => {
    try {
      await api.createFeedback({
        axiosPrivate,
        signal: new AbortController().signal,
        id,
        text: message,
        rate: rating,
      });
      const updatedTour = await api.getTourById({
        signal: new AbortController().signal,
        id,
      });
      setTour(updatedTour);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <section className="p-6">
        {tour && (
          <>
            <DetailDestination
              id={tour.id}
              name={tour.name}
              address={tour.address}
              photo={tour.photo}
              visitor={tour.visitor}
              capacity={tour.capacity}
              updatedAt={tour.updatedAt}
              description={tour.description}
              price={tour.price}
              map={tour.map}
            />
            <FeedbackInput onSubmit={onSubmitHandler} />
            <FeedbackList feedbacks={tour.feedbacks} />
          </>
        )}
      </section>
    </div>
  );
}

export default DetailPageUser;
