import React, { createContext, useState } from "react";

export const ContextProvider = createContext();
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const authInfo = {
    user,
    setUser,
    courses,
    setCourses,
  };
  return (
    <ContextProvider.Provider value={authInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Provider;
