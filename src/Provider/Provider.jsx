import React, { createContext, useState } from "react";

export const ContextProvider = createContext();
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authInfo = {
    user,
    setUser,
  };
  return (
    <ContextProvider.Provider value={authInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Provider;
