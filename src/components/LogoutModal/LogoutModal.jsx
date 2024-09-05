import { getAuth, signOut } from "firebase/auth";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { closeModals } from "../../redux/modalsSlice";
import { useDispatch } from "react-redux";
import { setFilterDelete } from "../../redux/nanniesSlice";
import {
  ModalActionTypeBtn,
  ModalText,
  ModalTitle,
} from "../Modal/Modal.styled";

const LogoutModal = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseConfirmLogout = () => {
    dispatch(closeModals());
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        dispatch(setFilterDelete());
        dispatch(closeModals());
        navigate("/", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ModalTitle>Log Out</ModalTitle>
      <ModalText $marginBottom="0px">
        Are you sure you want to log out?
      </ModalText>
      <div>
        <ModalActionTypeBtn type="button" onClick={handleLogout}>
          Confirm
        </ModalActionTypeBtn>
        <ModalActionTypeBtn type="button" onClick={handleCloseConfirmLogout}>
          Cancel
        </ModalActionTypeBtn>
      </div>
    </>
  );
};

export default LogoutModal;
