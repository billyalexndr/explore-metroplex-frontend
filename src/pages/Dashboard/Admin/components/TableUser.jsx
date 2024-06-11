import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

function TableUser({ users, onDelete, loggedInUserId }) {
  const navigate = useNavigate();

  const handleEditClick = (user) => {
    navigate(`/edit-user/${user.id}`, { state: { user } });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-sm text-center text-white uppercase bg-green-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user, index) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4 text-right">
                  {user.id !== loggedInUserId && (
                    <button
                      type="button"
                      className="font-medium text-yellow-3000 hover:underline"
                      onClick={() => handleEditClick(user)}
                    >
                      <FaEdit />
                    </button>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  {user.id !== loggedInUserId && (
                    <button
                      type="button"
                      className="font-medium text-red-600 hover:underline"
                      onClick={() => onDelete({ id: user.id })}
                    >
                      <FaRegTrashAlt />
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

TableUser.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  loggedInUserId: PropTypes.string.isRequired,
};

export default TableUser;
