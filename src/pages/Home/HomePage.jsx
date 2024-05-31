import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import useLogOut from '../../hooks/useLogOut';

function HomePage() {
  const [tours, setTours] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);
  const logout = useLogOut();

  const signOut = async () => {
    await logout();
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getTours = async () => {
      try {
        const tours = await api.getAllTour(controller.signal);
        if (isMounted) {
          setTours(tours);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      getTours();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  return (
    <div>
      <div>HomePage</div>
      <button onClick={signOut} type="button" className="button-logout">Log Out</button>
      <Link to="/user">Go to User Page</Link>
      {tours?.length
        ? (
          <ul>
            {tours.map((tour) => <li key={tour.id}>{tour?.name}</li>)}
          </ul>
        ) : <p>No tours to display</p>
      }
    </div>
  );
}

export default HomePage;
