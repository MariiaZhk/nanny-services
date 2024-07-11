import { useDispatch } from "react-redux";
import { ModalText, ModalTitle, StyledSpan } from "../Modal/Modal.styled";
import {
  changeLoginModal,
  changePleaseLoginModal,
  changeRegistrationModal,
} from "../../redux/modalsSlice";

const PleaseLoginModal = () => {
  const dispatch = useDispatch();

  const onLoginSpanClick = () => {
    dispatch(changePleaseLoginModal(false));
    dispatch(changeLoginModal(true));
  };
  const onRegisterSpanClick = () => {
    dispatch(changePleaseLoginModal(false));
    dispatch(changeRegistrationModal(true));
  };
  return (
    <>
      <ModalTitle>Add to favorites</ModalTitle>
      <ModalText size={"20px"}>
        To add nannies to your favorites, you need to{" "}
        <StyledSpan onClick={onLoginSpanClick}>LOG IN</StyledSpan> to your
        account.
      </ModalText>
      <ModalText size={"0px"}>
        If you don't have an account yet, please{" "}
        <StyledSpan onClick={onRegisterSpanClick}>REGISTER</StyledSpan>.
      </ModalText>
    </>
  );
};

export default PleaseLoginModal;
