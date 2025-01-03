import React, { useContext } from "react";
import { ContextProvider } from "../../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(ContextProvider);
  const location = useLocation();
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
