import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DestUserCard from './Destination/components/DestUserCard';
import StoryCard from './components/StoryCard';
import api from '../../../utils/api';
import Loading from '../../../components/Loading';

function UserPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getTours = async () => {
      try {
        const tours = await api.getAllTour({
          signal: controller.signal,
          page: 1,
          limit: 4,
        });
        if (isMounted) {
          setTours(tours);
          setLoading(false);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      setLoading(true);
      getTours();
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

  return (
    <div>
      <div className="relative">
        <img className="w-full h-screen" src="/images/banner.jpg" alt="" />
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-10 text-[#E4FCAA]">
          <h1 className="text-5xl font-bold">
            Uncover Adventures, One Metroplex at a Time!
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-10 text-3xl font-bold mt-7">
        <h1 className="text-[#006769]">Where Do You Want to Explore?</h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          {tours.map((tour) => (
            <DestUserCard
              key={tour.id}
              id={tour.id}
              photo={tour.photo}
              name={tour.name}
              description={tour.description}
              rating={tour.rating}
            />
          ))}
        </div>
        <Link
          to="/destination"
          type="button"
          className="text-white mt-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          See All
        </Link>
      </div>
      <div className="relative mt-7">
        <img className="w-full h-[450px]" src="/images/about.png" alt="" />
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full gap-10 mx-60">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-white">ABOUT US</h1>
            <p className="text-base text-center text-white">
              Welcome to Explore Metroplex! We are your trusted guide to
              discovering the beauty and uniqueness of Jabodetabek. With our
              dedication to delivering the best experiences, we invite you to
              understand, love, and appreciate every corner of this city. From
              renowned attractions to hidden gems, we&apos;re here to lead you
              through unforgettable adventures. Join us in uncovering the
              boundless charm of this metropolitan area. Happy exploring!s
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-10 mb-10 text-3xl font-bold mt-7">
        <h1 className="text-[#006769]">Stories of Explore Metroplex</h1>
        <div className="flex gap-4">
          {tours
            .filter((tour) => tour.feedbacks.length > 0)
            .slice(0)
            .map((tour) => {
              const feedback = tour.feedbacks[0];
              return (
                <StoryCard
                  key={tour.id}
                  title={tour.name}
                  profilePicture={feedback.user.profilePicture}
                  name={feedback.user.name}
                  description={feedback.text}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
