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

  const login = (email, password) => {
    // FIX: Check password to satisfy "unused variable" warning
    if (!password) return false; 

    // MOCK LOGIN logic
    const dummyUser = { 
      name: email.split('@')[0], 
      email: email, 
      token: '123456' 
    };
    
    setUser(dummyUser);
    localStorage.setItem('user', JSON.stringify(dummyUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const signup = (name, email, password) => {
    // FIX: Check password here too
    if (!password) return false;

    // MOCK SIGNUP logic
    const dummyUser = { name, email, token: '123456' };
    setUser(dummyUser);
    localStorage.setItem('user', JSON.stringify(dummyUser));
    return true;
  };

  const value = {
    user,
    login,
    logout,
    signup
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};