import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    // console.log("user is not authenticated");
    return <Navigate to="/" />;
  }
  return children;
};
