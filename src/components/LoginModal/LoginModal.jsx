import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  ModalActionTypeBtn,
  ModalEyeBtn,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalSvg,
  ModalText,
  ModalTitle,
  StyledSpan,
} from "../Modal/Modal.styled";
import { useForm } from "react-hook-form";
import sprite from "../../assets/sprite.svg";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import {
  changeLoginModal,
  changeRegistrationModal,
  closeModals,
} from "../../redux/modalsSlice";
import { toast } from "react-toastify";

const LoginModal = () => {
  const { register, handleSubmit } = useForm();
  const [eyePass, setEyePass] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const showEyePass = () => {
    setEyePass(!eyePass);
  };

  const onLogInClick = async ({ email, password }) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        login({
          user: {
            email: user.email,
            id: user.uid,
            name: user.displayName,
            token: user.accessToken,
          },
        })
      );

      dispatch(closeModals(false));
      toast.info(`Welcome back, ${user.displayName}`);
    } catch (error) {
      console.error("Error during registration:", error);

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-credential"
      ) {
        setError(
          "Email or password is incorrect. Check your credentials or sign up."
        );
      } else {
        setError(error.message);
      }
    }
  };

  const onBtnClick = () => {
    dispatch(changeLoginModal(false));
    dispatch(changeRegistrationModal(true));
  };

  return (
    <>
      <ModalTitle>Log In</ModalTitle>
      <ModalText>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </ModalText>
      <ModalForm onSubmit={handleSubmit(onLogInClick)}>
        <ModalLabel htmlFor="email">
          <ModalInput
            {...register("email")}
            type="text"
            placeholder="Email"
            name="email"
            id="email"
          />
        </ModalLabel>
        <ModalLabel htmlFor="password">
          <ModalEyeBtn type="button" onClick={showEyePass}>
            <ModalSvg>
              {eyePass ? (
                <use href={`${sprite}#icon-eye`} />
              ) : (
                <use href={`${sprite}#icon-eye-off`} />
              )}
            </ModalSvg>
          </ModalEyeBtn>
          <ModalInput
            {...register("password")}
            type={eyePass ? "text" : "password"}
            placeholder="Password"
            name="password"
            id="password"
          />
        </ModalLabel>
        <ModalActionTypeBtn type="submit">Log In</ModalActionTypeBtn>
        <ModalText>
          If you don't have an account yet, please{" "}
          <StyledSpan onClick={onBtnClick}>register</StyledSpan>
        </ModalText>
      </ModalForm>
    </>
  );
};

export default LoginModal;
