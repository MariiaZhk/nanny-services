import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  ModalActionTypeBtn,
  ModalEyeBtn,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalSvg,
  ModalText,
  ModalTitle,
} from "../Modal/Modal.styled";
import { useForm } from "react-hook-form";
import sprite from "../../assets/sprite.svg";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { closeModals } from "../../redux/modalsSlice";
import { toast } from "react-toastify";

const LoginModal = () => {
  const { register, handleSubmit } = useForm();
  const [eyePass, setEyePass] = useState(false);
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
          },
          token: user.accessToken,
        })
      );
      dispatch(closeModals(false));
      toast.info(`Welcome back, ${user.displayName}`);
    } catch (error) {
      console.error("Error during registration:", error);
    }

    // const errorCode = error.code;
    // const errorMessage = error.message;
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
      </ModalForm>
    </>
  );
};

export default LoginModal;
