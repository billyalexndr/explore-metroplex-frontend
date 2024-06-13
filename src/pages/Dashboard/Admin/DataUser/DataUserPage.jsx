import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TableUser from '../components/TableUser';
import SearchBar from '../../../../components/Dashboard/SearchBar';
import Pagination from '../../../../components/Dashboard/Pagination';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import useAuth from '../../../../hooks/useAuth';

function DataUserPage() {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const users = await api.getAllUser({
          axiosPrivate,
          signal: controller.signal,
          query,
        });
        if (isMounted) {
          setUsers(users);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      getUsers();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, [location.search, navigate, location]);

  const handleDeleteUser = async ({ id }) => {
    if (window.confirm('Are you sure you want to delete account?')) {
      try {
        await api.deleteUser({
          axiosPrivate,
          signal: new AbortController().signal,
          id,
        });
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center mx-10">
          <div className="flex flex-col mt-7 font-bold text-[#006769] justify-center items-center">
            <h1>TABLE DATA USER</h1>
            <h1>EXPLORE METROPLEX</h1>
          </div>
          <div className="flex items-center justify-center w-2/4 mt-7">
            <SearchBar />
          </div>
          <div className="w-full mt-7">
            <TableUser
              users={users}
              onDelete={handleDeleteUser}
              loggedInUserId={auth.user.id}
            />
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
