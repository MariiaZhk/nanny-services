import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import sprite from "../../assets/sprite.svg";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { baseAuthValidationSchema } from "../../utils/schemas/authSchema";
import {
  ErrorMessage,
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
import {
  changeLoginModal,
  changeRegistrationModal,
  closeModals,
} from "../../redux/modalsSlice";

const LoginModal = () => {
  const [eyePass, setEyePass] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(baseAuthValidationSchema),
  });

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
        toast.info(
          "Email or password is incorrect. Check your credentials or sign up."
        );
      } else {
        console.error(error.message);
        toast.error("An error occurred during login. Please try again.");
      }
    }
  };

  const onRegisterBtnClick = () => {
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
            name="email"
            id="email"
            placeholder="Email"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
            name="password"
            id="password"
            placeholder="Password"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Password")}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </ModalLabel>
        <ModalActionTypeBtn type="submit">Log In</ModalActionTypeBtn>
        <ModalText $marginBottom="0px">
          If you don't have an account yet, please{" "}
          <StyledSpan onClick={onRegisterBtnClick}>register</StyledSpan>
        </ModalText>
      </ModalForm>
    </>
  );
};

export default LoginModal;
