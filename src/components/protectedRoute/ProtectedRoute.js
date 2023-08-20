import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [, , loggedInUser] = useUser();

  if (loggedInUser.loggedIn === true) {
    return children;
  }

  return <Navigate to="/online-store/login" />;
};

export default ProtectedRoute;
