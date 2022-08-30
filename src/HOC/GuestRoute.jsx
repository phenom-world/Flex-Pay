import { isEmpty } from "lodash";
import { Navigate, useLocation } from "react-router-dom";

const GuestRoute = (props) => {
  const { children } = props;
  const location = useLocation();

  const authorization = JSON.parse(localStorage.getItem("auth"))?.tokens;

  if (!isEmpty(authorization?.access)) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return children;
};

export default GuestRoute;
