import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "@mui/material";
import sprite from "../../assets/sprite.svg";
import { closeModals } from "../../redux/modalsSlice";
import {
  BtnClose,
  ModalContainer,
  ModalStyled,
  Overlay,
  SvgBtnClose,
} from "./Modal.styled";
import {
  selectAppointmentModal,
  selectIsModalOpen,
  selectLoginModal,
  selectRegistrationModal,
} from "../../redux/selectors";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

import { useCallback, useEffect } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const modalRoot = document.getElementById("portal");

const Modal = () => {
  const dispatch = useDispatch();
  const loginModal = useSelector(selectLoginModal);
  const registrationModal = useSelector(selectRegistrationModal);
  const appointmentModal = useSelector(selectAppointmentModal);
  const isModalOpen = useSelector(selectIsModalOpen);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = "auto";
    dispatch(closeModals(false));
  }, [dispatch]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal, dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDom.createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalContainer>
        <Fade in={isModalOpen} timeout={600}>
          <ModalStyled>
            {loginModal && <LoginModal />}
            {registrationModal && <RegistrationModal />}
            {appointmentModal && <AppointmentModal />}

            <BtnClose type="button" onClick={closeModal}>
              <SvgBtnClose>
                <use href={`${sprite}#icon-x`} />
              </SvgBtnClose>
            </BtnClose>
          </ModalStyled>
        </Fade>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
