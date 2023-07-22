import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
};

export default PrivateRoute;
