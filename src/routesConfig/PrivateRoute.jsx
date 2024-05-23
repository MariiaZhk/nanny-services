import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectUser } from "../redux/selectors";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default PrivateRoute;
