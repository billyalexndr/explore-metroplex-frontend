import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import api from '../../utils/api';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

function ProfilePage() {
  const [profile, setProfile] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', username: '', email: '' });
  const [originalData, setOriginalData] = useState({});
  const [errMsg, setErrMsg] = useState('');
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getOwnProfile = async () => {
      try {
        const profile = await api.getOwnProfile({ axiosPrivate, signal: controller.signal });
        if (isMounted) {
          setProfile(profile);
          setFormData({ name: profile.name, username: profile.username, email: profile.email });
          setOriginalData({ name: profile.name, username: profile.username, email: profile.email });
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
  }, [axiosPrivate, navigate, location]);

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

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {profile && (
        <div className="relative flex items-start px-10 py-14 bg-gray-100 rounded-lg shadow-md w-full max-w-lg">
          <img
            src={profile.profilePicture}
            alt={profile.username}
            className="w-24 h-24 rounded-full mr-16"
          />
          {!isEditing && (
            <div className="flex flex-col space-y-3">
              <div className="flex">
                <p className="font-bold w-24">Name</p>
                <p>{profile.name}</p>
              </div>
              <div className="flex">
                <p className="font-bold w-24">Username</p>
                <p>{profile.username}</p>
              </div>
              <div className="flex">
                <p className="font-bold w-24">Email</p>
                <p>{profile.email}</p>
              </div>
              <div className="flex">
                <p className="font-bold w-24">Role</p>
                <p>{profile.role}</p>
              </div>
            </div>
          )}
          {isEditing && (
            <form className="flex flex-col space-y-3" onSubmit={handleFormSubmit}>
              {errMsg && (
                <div className="text-red-500 text-sm font-bold mt-2">{errMsg}</div>
              )}
              <div className="flex">
                <label className="font-bold w-24" htmlFor="name">Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-grow border font-normal border-gray-300 rounded px-2"
                  />
                </label>
              </div>
              <div className="flex">
                <label className="font-bold w-24" htmlFor="username">Username
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="flex-grow border font-normal border-gray-300 rounded px-2"
                  />
                </label>
              </div>
              <div className="flex">
                <label className="font-bold w-24" htmlFor="email">Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-grow border font-normal border-gray-300 rounded px-2"
                  />
                </label>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          )}
          {!isEditing && (
            <MdModeEdit
              className="absolute top-4 right-4 text-gray-600 cursor-pointer"
              onClick={() => setIsEditing(true)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
