import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login page, but remember where they were trying to go!
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};