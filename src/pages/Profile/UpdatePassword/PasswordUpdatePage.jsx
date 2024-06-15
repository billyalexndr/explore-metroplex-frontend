import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../../utils/api';
import useInput from '../../../hooks/useInput';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

function PasswordUpdatePage() {
  const axiosPrivate = useAxiosPrivate();
  const [currentPassword, onCurrentPasswordChange] = useInput('');
  const [newPassword, onWewPasswordChange] = useInput('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handlePasswordUpdate = async () => {
    try {
      await api.updatePassword({
        axiosPrivate,
        signal: null,
        currentPassword,
        newPassword,
      });
      setErrMsg('');
      navigate('/profile', { state: { from: location } });
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center bg-white m-9">
        <div className="relative flex items-start w-full max-w-lg px-10 border-2 border-[#006769] rounded-lg shadow-md py-14">
          <form className="flex flex-col w-full space-y-3">
            {errMsg && (
              <div className="mt-2 text-sm font-bold text-red-500">
                {errMsg}
              </div>
            )}
            <h2 className="text-lg font-bold text-center text-[#006769]">
              Create a New Password
            </h2>
            <div className="relative">
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={currentPassword}
                onChange={onCurrentPasswordChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-[#006769] appearance-none focus:outline-none focus:ring-0 focus:border-[#006769] peer"
                placeholder=" "
              />
              <label
                htmlFor="currentPassword"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#006769] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Current Password
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={onWewPasswordChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-[#006769] appearance-none focus:outline-none focus:ring-0 focus:border-[#006769] peer"
                placeholder=" "
              />
              <label
                htmlFor="newPassword"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#006769] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                New Password
              </label>
            </div>
            <div className="flex justify-center space-x-3">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                onClick={() =>
                  navigate('/profile', { state: { from: location } })
                }
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 text-white bg-[#006769] hover:bg-[#053a3b] rounded"
                onClick={handlePasswordUpdate}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordUpdatePage;
