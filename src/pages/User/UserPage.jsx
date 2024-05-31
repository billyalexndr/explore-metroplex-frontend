import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../utils/api';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

function UserPage() {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
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

  return (
    <div>
      <div>User Page</div>
      {users?.length
        ? (
          <ul>
            {users.map((user) => <li key={user.id}>{user?.name}</li>)}
          </ul>
        ) : <p>No users to display</p>
      }
    </div>
  );
}

export default UserPage;
