import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DetailDestination from './components/DetailDestination';
import FeedbackList from './components/FeedbackList';
import api from '../../../../utils/api';

function DetailPageAdmin() {
  const { id } = useParams();
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
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      getDetailTour();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  return (
    <div className="w-full">
      <section className="p-6">
        {tour && (
          <>
            <DetailDestination
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
            <FeedbackList feedbacks={tour.feedbacks} />
          </>
        )}
      </section>
    </div>
  );
}

export default DetailPageAdmin;
