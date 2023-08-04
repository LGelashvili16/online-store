import { createContext, useContext, useState } from 'react';

const saveForLaterContext = createContext();

export const useSaveForLater = () => {
  return useContext(saveForLaterContext);
};

export const SaveForLaterStateProvider = ({ children }) => {
  const [saveForLater, setSaveForLater] = useState([]);

  return (
    <saveForLaterContext.Provider value={[saveForLater, setSaveForLater]}>
      {children}
    </saveForLaterContext.Provider>
  );
};
