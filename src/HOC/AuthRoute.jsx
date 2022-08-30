import { isEmpty } from "lodash";
import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const location = useLocation();

  const authorization = JSON.parse(localStorage.getItem("auth"))?.tokens;
  if (isEmpty(authorization?.access)) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default AuthRoute;
