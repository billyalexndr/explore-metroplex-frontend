import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../utils/api';
import TextInput from '../../../components/Auth/TextInput';
import useInput from '../../../hooks/useInput';

function FormSection() {
  const [name, onNameChange] = useInput('');
  const [username, onUsernameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrMsg('');

    try {
      await api.register({
        name,
        username,
        email,
        password,
      });

      navigate('/login');
    } catch (error) {
      setErrMsg(error.response?.data?.message || 'registration failed');
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <div className="max-w-md w-full p-6 flex flex-col">
        <div className="flex flex-col py-10 gap-y-3">
          <h1 className="md:text-3xl text-2xl font-semibold text-[#006769] text-center">
            CREATE ACCOUNT
          </h1>
        </div>
        <div className="space-y-4">
          {errMsg && <p className="text-red-500">{errMsg}</p>}
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-1">
            <TextInput
              type="text"
              id="name"
              placeholder="Name"
              icon={(
                <svg
                  className="w-6 h-6 text-gray-400 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              inputHandler={onNameChange}
            />
            <TextInput
              type="text"
              id="username"
              placeholder="Username"
              icon={(
                <svg
                  className="w-6 h-6 text-gray-400 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              inputHandler={onUsernameChange}
            />
            <TextInput
              type="text"
              id="email"
              placeholder="Email"
              icon={(
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
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
                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
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
                SIGN UP
              </button>
            </div>
          </form>
        </div>
        <div className="mt-2 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#006769] hover:text-white font-semibold hover:bg-[#40A578] hover:p-1 hover:rounded-md"
            >
              Sign In Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
