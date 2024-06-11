import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogOut from '../../hooks/useLogOut';
import NavUser from '../Dashboard/User/components/NavUser';
import Footer from '../../components/Dashboard/Footer';

function ProfilePage() {
  const axiosPrivate = useAxiosPrivate();
  const [profile, setProfile] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
  });
  const [originalData, setOriginalData] = useState({});
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);
  const logout = useLogOut();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getOwnProfile = async () => {
      try {
        const profile = await api.getOwnProfile({
          axiosPrivate,
          signal: controller.signal,
        });
        if (isMounted) {
          setProfile(profile);
          setFormData({
            name: profile.name,
            username: profile.username,
            email: profile.email,
          });
          setOriginalData({
            name: profile.name,
            username: profile.username,
            email: profile.email,
          });
        }
      } catch (error) {
        setErrMsg(error.response.data.message);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      getOwnProfile();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = await api.updateUser({
        axiosPrivate,
        signal: null,
        id: profile.id,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        role: profile.role,
      });
      setIsEditing(false);
      setProfile(updatedProfile);
      setOriginalData({
        name: formData.name,
        username: formData.username,
        email: formData.email,
      });
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(originalData);
    setErrMsg('');
  };

  const handleDeleteUser = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await api.deleteUser({
          axiosPrivate,
          signal: new AbortController().signal,
          id: profile.id,
        });
        await logout();
      } catch (error) {
        setErrMsg(error.response.data.message);
      }
    }
  };

  return (
    <div className="w-full">
      <NavUser />
      <div class="flex m-9 justify-center items-center">
        {profile && (
          <div class="flex flex-col p-9 w-1/2 bg-white border border-gray-200 rounded-lg shadow">
            <div class="flex flex-row justify-between mb-9">
              <button
                type="button"
                onClick={handleDeleteUser}
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
              >
                <svg
                  class="w-[16px] h-[16px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Delete User
              </button>
              <div class="flex flex-row justify-around">
                {!isEditing && (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                  >
                    <svg
                      class="w-3.5 h-3.5 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                      />
                    </svg>
                    Edit Profile
                  </button>
                )}
                <Link
                  to="/profile/update-password"
                  class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                >
                  <svg
                    class="w-3.5 h-3.5 me-2"
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
                  Edit Password
                </Link>
              </div>
            </div>
            <div class="flex flex-row justify-around">
              <div class="flex flex-col items-center">
                <img
                  class="border-4 border-green-700 w-32 h-32 rounded-full shadow-lg mb-5"
                  src={profile.profilePicture}
                  alt={profile.username}
                />
                <h1 class="mb-5 text-2xl font-medium text-gray-900">
                  Bonnie Green
                </h1>
              </div>
              {!isEditing && (
                <div class="flex flex-col space-y-3">
                  <div class="flex">
                    <p class="font-bold w-24">Username</p>
                    <p>{profile.username}</p>
                  </div>
                  <div class="flex">
                    <p class="font-bold w-24">Email</p>
                    <p>{profile.email}</p>
                  </div>
                  <div class="flex">
                    <p class="font-bold w-24">Role</p>
                    <p>{profile.role}</p>
                  </div>
                </div>
              )}
              {isEditing && (
                <form
                  className="flex flex-col space-y-3"
                  onSubmit={handleFormSubmit}
                >
                  {errMsg && (
                    <div className="text-red-500 text-sm font-bold mt-2">
                      {errMsg}
                    </div>
                  )}
                  <div class="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-700 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlfor="name"
                      class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Name
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-700 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlfor="username"
                      class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Username
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-700 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlfor="email"
                      class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;