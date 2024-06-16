import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import useInput from '../../../../hooks/useInput';
import Loading from '../../../../components/Loading';

function EditUserPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(true);

  const [name, handleNameChange] = useInput(state?.user.name || '');
  const [username, handleUsernameChange] = useInput(state?.user.username || '');
  const [email, handleEmailChange] = useInput(state?.user.email || '');
  const [role, handleRoleChange] = useInput(state?.user.role || 'USER');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.updateUser({
        axiosPrivate,
        signal: null,
        id,
        name,
        username,
        email,
        role,
      });
      navigate('/data-user');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleCancel = () => {
    navigate('/data-user');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center m-9">
      <h1 className="mb-5 text-center text-xl font-bold text-[#006769]">
        EDIT USER
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-3/4 bg-white border border-gray-200 rounded-lg shadow p-9"
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              id="name"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#006769] appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#006769] peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#006769] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#006769] appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#006769] peer"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#006769] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Username
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#006769] appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#006769] peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#006769] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Floating filled
            </label>
          </div>
          <div className="relative">
            <select
              id="select"
              name="role"
              value={role}
              onChange={handleRoleChange}
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#006769] appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#006769] peer"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
            <label
              htmlFor="select"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#006769] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Select
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <div className="flex flex-row justify-around w-1/2 gap-6">
            <button
              type="submit"
              onClick={handleCancel}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              {' '}
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-[#006769] hover:bg-[#053a3b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUserPage;
