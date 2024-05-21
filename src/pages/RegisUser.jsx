import React from 'react';
import { Link } from 'react-router-dom';

function RegisUser() {
  return (
    <div className="flex h-screen bg-white">
      <div className="close-button absolute right-0 p-5 lg:p-5">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center overflow-y-hidden">
        <div className="w-full">
          <img
            src="/images/image-user-login.jpg"
            className="object-cover w-full"
            alt=""
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6 flex flex-col">
          <div className="flex flex-col py-10 gap-y-3 ">
            <h1 className="md:text-3xl text-2xl font-semibold text-[#006769] text-center">
              CREATE ACCOUNT
            </h1>
          </div>
          <div className="space-y-4">
            <form className="flex flex-col gap-y-1">
              <div className="flex flex-col gap-y-1">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-6 h-6 text-gray-400 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#006769] focus:border-[#006769] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#006769] dark:focus:border-[#006769]"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 py-5">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-6 h-6 text-gray-400 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="username"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#006769] focus:border-[#006769] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#006769] dark:focus:border-[#006769]"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#006769] focus:border-[#006769] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#006769] dark:focus:border-[#006769]"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 py-5">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#006769] focus:border-[#006769] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#006769] dark:focus:border-[#006769]"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex">
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
              Already have an account ?{' '}
              <Link
                to="/login"
                className="text-[#006769] hover:text-white font-semibold hover:bg-[#40A578] hover:p-1 hover:rounded-md"
              >
                {' '}
                Sign In Now{' '}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisUser;
