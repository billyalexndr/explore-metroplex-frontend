import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';
import useInput from '../../../../hooks/useInput';

function EditUserPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const [name, handleNameChange] = useInput(state?.user.name || '');
  const [username, handleUsernameChange] = useInput(state?.user.username || '');
  const [email, handleEmailChange] = useInput(state?.user.email || '');
  const [role, handleRoleChange] = useInput(state?.user.role || 'USER');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.updateUser({ axiosPrivate, signal: null, id, name, username, email, role });
      navigate('/data-user');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Role</label>
          <select
            name="role"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUserPage;
