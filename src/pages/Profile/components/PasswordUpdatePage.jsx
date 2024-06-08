// PasswordUpdatePage.js
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
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="relative flex items-start px-10 py-14 bg-gray-100 rounded-lg shadow-md w-full max-w-lg">
        <form className="flex flex-col space-y-3">
          {errMsg && (
            <div className="text-red-500 text-sm font-bold mt-2">{errMsg}</div>
          )}
          <div className="flex">
            <label className="font-bold w-32" htmlFor="currentPassword">Current Password
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={currentPassword}
                onChange={onCurrentPasswordChange}
                className="flex-grow border font-normal border-gray-300 rounded px-2"
              />
            </label>
          </div>
          <div className="flex">
            <label className="font-bold w-32" htmlFor="newPassword">New Password
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={onWewPasswordChange}
                className="flex-grow border font-normal border-gray-300 rounded px-2"
              />
            </label>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => navigate('/profile', { state: { from: location } })}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handlePasswordUpdate}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordUpdatePage;
