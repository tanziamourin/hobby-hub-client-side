import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import Spinner from "../Components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Spinner></Spinner>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;

  return children;
};

export default PrivateRoute;
