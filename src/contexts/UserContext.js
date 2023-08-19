import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

export const UserProvider = ({ children }) => {
  const defaultValue =
    JSON.parse(window.localStorage.getItem('users')) === null
      ? []
      : JSON.parse(window.localStorage.getItem('users'));

  const defaultUserValue =
    JSON.parse(window.localStorage.getItem('users')) === null
      ? []
      : JSON.parse(window.localStorage.getItem('loggedInUser'));

  const [users, setUsers] = useState(defaultValue);

  const [loggedInUser, setLoggedInUsers] = useState(defaultUserValue);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('users'));
    const user = JSON.parse(window.localStorage.getItem('loggedInUser'));

    if (data !== null) setUsers(data);
    if (user !== null) setLoggedInUsers(user);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));

    if (users.length > 0) {
      const user = users.find((user) => user.loggedIn === true);
      if (user)
        window.localStorage.setItem('loggedInUser', JSON.stringify([user]));
      else window.localStorage.setItem('loggedInUser', JSON.stringify([]));
    }

    if (users.length === 0) {
      window.localStorage.setItem('loggedInUser', JSON.stringify([]));
    }
  }, [users, loggedInUser]);

  return (
    <userContext.Provider
      value={[users, setUsers, loggedInUser, setLoggedInUsers]}
    >
      {children}
    </userContext.Provider>
  );
};
