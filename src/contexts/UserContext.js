import { createContext, useContext, useEffect, useState } from 'react';

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

export const UserProvider = ({ children }) => {
  const defaultValue =
    JSON.parse(window.localStorage.getItem('users')) === null
      ? []
      : JSON.parse(window.localStorage.getItem('users'));

  const [users, setUsers] = useState(defaultValue);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('users'));

    if (data !== null) setUsers(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <userContext.Provider value={[users, setUsers]}>
      {children}
    </userContext.Provider>
  );
};
