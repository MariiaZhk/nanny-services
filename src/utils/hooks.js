import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/selectors";

const useAuth = () => {
  const currentUser = useSelector(selectCurrentUser);

  return {
    currentUser,
    name: currentUser?.name,
    isAuth: !!currentUser,
    email: currentUser?.email,
  };
};

export default useAuth;
