import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectUser } from "../redux/selectors";

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);

  if (user) {
    return <Navigate to={"/favories"} />;
  }
  return children;
};

export default PublicRoute;
