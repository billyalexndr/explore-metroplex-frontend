import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavAdmin from '../components/NavAdmin';
import TableUser from '../components/TableUser';
import Footer from '../../../../components/Dashboard/Footer';
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

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const users = await api.getAllUser({ axiosPrivate, signal: controller.signal });
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
  }, []);

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
      <NavAdmin />
      <div className="flex items-center justify-center">
        <div className="w-3/4">
          <div className="flex flex-col mt-7 font-bold text-[#006769] justify-center items-center">
            <h1>TABLE DATA USER</h1>
            <h1>EXPLORE METROPLEX</h1>
          </div>
          {/* <SearchBar /> */}
          <div className="mt-7">
            <TableUser users={users} onDelete={handleDeleteUser} loggedInUserId={auth.user.id} />
          </div>
          {/* <div className="flex items-center justify-center w-full mt-7">
            <Pagination />
          </div> */}
        </div>
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </div>
  );
}

export default DataUserPage;
