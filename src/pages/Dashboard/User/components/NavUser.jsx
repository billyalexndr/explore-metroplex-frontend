import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import useLogOut from '../../../../hooks/useLogOut';
import api from '../../../../utils/api';

function NavUser() {
  const axiosPrivate = useAxiosPrivate();
  const [profile, setProfile] = useState();
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

    const getOwnProfile = async () => {
      try {
        const profile = await api.getOwnProfile({
          axiosPrivate,
          signal: controller.signal,
        });
        if (isMounted) {
          setProfile(profile);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      getOwnProfile();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  return (
    <nav className="sticky top-0 z-20 w-full bg-white border-b border-gray-200 drop-shadow-md start-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-[#006769] text-2xl font-semibold whitespace-nowrap dark:text-white">
            EXPLORE METROPLEX
          </span>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center">
              <Link
                to="/"
                className="block py-2 px-3 text-[#006769] rounded md:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/destination"
                className="block py-2 px-3 text-[#006769] rounded hover:font-bold"
              >
                Destination
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/reservation"
                className="block py-2 px-3 text-[#006769] rounded hover:font-bold"
              >
                Reservation
              </Link>
            </li>
            <li>
              <div className="flex items-center justify-center gap-2">
                <Link to="/profile">
                  {profile && (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={profile.profilePicture}
                      alt={profile.username}
                    />
                  )}
                </Link>
                <button
                  onClick={signOut}
                  type="button"
                  className="px-5 py-2 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavUser;
