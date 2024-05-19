import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../blogg/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
