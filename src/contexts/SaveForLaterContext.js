import { createContext, useContext, useEffect, useState } from 'react';

const saveForLaterContext = createContext();

export const useSaveForLater = () => {
  return useContext(saveForLaterContext);
};

export const SaveForLaterStateProvider = ({ children }) => {
  const localStorageSaved =
    JSON.parse(window.localStorage.getItem('saved')) === null
      ? []
      : JSON.parse(window.localStorage.getItem('saved'));

  const [saveForLater, setSaveForLater] = useState(localStorageSaved);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('saved'));
    if (data !== null) setSaveForLater(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('saved', JSON.stringify(saveForLater));
  }, [saveForLater]);

  return (
    <saveForLaterContext.Provider value={[saveForLater, setSaveForLater]}>
      {children}
    </saveForLaterContext.Provider>
  );
};
