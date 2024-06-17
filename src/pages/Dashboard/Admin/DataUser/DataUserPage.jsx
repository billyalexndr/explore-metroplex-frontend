import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TableUser from '../components/TableUser';
import SearchBar from '../../../../components/Dashboard/SearchBar';
import Pagination from '../../../../components/Dashboard/Pagination';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../../components/Loading';
import ConfirmModal from '../components/ConfirmModal';

function DataUserPage() {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
          setLoading(false);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    setLoading(true);
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [location.search, navigate, location]);

  useEffect(() => {
    setPageNumber(0);
  }, [query]);

  const handleDeleteUser = async () => {
    if (userToDelete) {
      try {
        await api.deleteUser({
          axiosPrivate,
          signal: new AbortController().signal,
          id: userToDelete.id,
        });
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== userToDelete.id),
        );
        setUserToDelete(null);
      } catch (error) {
        alert(error.response.data.message);
      } finally {
        setIsModalOpen(false);
      }
    }
  };

  const confirmDeleteUser = (user) => {
    setUserToDelete(user);
    setIsModalOpen(true);
  };

  if (loading) {
    return <Loading />;
  }

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
              onDelete={confirmDeleteUser}
              loggedInUserId={auth.user.id}
            />
          </div>
          <div className="flex items-center justify-center w-full mt-7">
            <Pagination />
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteUser}
        message="Are you sure you want to delete this account?"
      />
    </div>
  );
}

export default DataUserPage;
