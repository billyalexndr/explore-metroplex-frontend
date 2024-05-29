import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

function RequiredAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    allowedRoles.includes(auth?.role)
      ? <Outlet />
      : auth?.user
        ? <Navigate to="/" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
}

RequiredAuth.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RequiredAuth;
