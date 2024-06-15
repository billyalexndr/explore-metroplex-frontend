import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import api from '../../../../utils/api';
import TextInput from '../../../../components/Auth/TextInput';
import useInput from '../../../../hooks/useInput';
import useAuth from '../../../../hooks/useAuth';
import useLogOut from '../../../../hooks/useLogOut';

function FormSection() {
  const { setAuth } = useAuth();
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const logout = useLogOut();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrMsg('');

    try {
      const token = await api.login({ email, password });
      const { id, name, username, role } = jwtDecode(token);

      if (role !== 'USER') {
        throw new Error('User Account not found');
      }

      setAuth({ user: { id, name, username, email }, role, accessToken: token });

      navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'login failed';
      setErrMsg(errorMessage);
      await logout();
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <div className="max-w-md w-full p-6 flex flex-col">
        <div className="flex flex-col py-10 gap-y-3">
          <h1 className="text-lg mb-2 text-gray-800 font-semibold text-center">
            WELCOME TO
          </h1>
          <h1 className="md:text-3xl text-2xl font-semibold text-[#006769] text-center">
            EXPLORE METROPLEX
          </h1>
        </div>
        <div className="space-y-4">
          {errMsg && <p className="text-red-500">{errMsg}</p>}
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-1">
            <TextInput
              type="text"
              id="email-address-icon"
              placeholder="Email"
              icon={(
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M10.036 8.278L19.294.488A1.979 1.979 0 0018 0H2A1.987 1.987 0 00.641.541l9.395 7.737z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 002 2h16a2 2 0 002-2V2.5L11.241 9.817z" />
                </svg>
              )}
              inputHandler={onEmailChange}
            />
            <TextInput
              type="password"
              id="password"
              placeholder="Password"
              icon={(
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 10V7a4 4 0 118 0v3h1a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2h1Zm2-3a2 2 0 114 0v3h-4V7Zm2 6a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              inputHandler={onPasswordChange}
            />
            <div className="flex py-5">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#006769] to-[#40A578] font-semibold p-2 rounded-full text-white shadow-sm focus:bg-[#006769] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900 transition-colors duration-300"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
        <div className="mt-2 text-sm text-gray-600 text-center">
          <p>
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="text-[#006769] hover:text-white font-semibold hover:bg-[#40A578] hover:p-1 hover:rounded-md"
            >
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

FormSection.propTypes = {
};

export default FormSection;
