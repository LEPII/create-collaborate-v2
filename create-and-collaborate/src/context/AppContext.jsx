import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ child }) => {
  const [CurrentUser, setCurrentUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        CurrentUser,
        setCurrentUser,
      }}
    >
      {child}
    </AppContext.Provider>
  );
};