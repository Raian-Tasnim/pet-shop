import React, { createContext, useContext, useState} from 'react';

const AuthContext = createContext();

// FIX: Add this comment to disable the Fast Refresh warning for this line
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Check localStorage on load to keep user logged in on refresh
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      let data;
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch (err) {
        throw new Error(`Server error (${response.status}). Please make sure the backend server is running and you restarted the app.`);
      }

      if (!response.ok) throw new Error(data.message || 'Login failed');
      
      const loggedUser = { ...data.user, token: data.token };
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const signup = async (name, email, password) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      let data;
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch (err) {
        throw new Error(`Server error (${response.status}). Please make sure the backend server is running and you restarted the app.`);
      }

      if (!response.ok) throw new Error(data.message || 'Signup failed');

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const value = {
    user,
    login,
    logout,
    signup
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};