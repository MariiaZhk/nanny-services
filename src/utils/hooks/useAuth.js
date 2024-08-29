import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

const useAuth = () => {
  const currentUser = useSelector(selectUser);

  return {
    currentUser,
    name: currentUser?.name,
    isAuth: !!currentUser?.email,
    email: currentUser?.email,
  };
};

export default useAuth;
