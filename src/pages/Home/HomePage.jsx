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
      <Link to="/profile">Profile</Link>
      <Link to="/add">Add Tour</Link>
      {tours?.length
        ? (
          <ul>
            {tours.map((tour) => (
              <li key={tour.id}>
                <div>
                  <img src={tour.photo} alt={tour.name} />
                </div>
                <div>
                  <h3>{tour.name}</h3>
                  <p>Description: {tour.description}</p>
                  <p>Price: {tour.price}</p>
                  <p>Capacity: {tour.capacity}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : <p>No tours to display</p>
      }
    </div>
  );
}

export default HomePage;
