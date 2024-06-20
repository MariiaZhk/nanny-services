import { useState } from "react";
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
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/authSlice";
import { closeModals } from "../../redux/modalsSlice";
import { toast } from "react-toastify";

const RegistrationModal = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [eyePass, setEyePass] = useState(false);
  const [error, setError] = useState(null);

  const showEyePass = () => {
    setEyePass(!eyePass);
  };

  const onSignUpClick = async ({ name, email, password }) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      dispatch(
        registration({
          user: {
            email: user.email,
            id: user.uid,
            name: user.displayName,
            token: user.accessToken,
          },
        })
      );
      dispatch(closeModals(false));
      toast.info(`Welcome, ${user.displayName}`);
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("User with this email already exists.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <ModalTitle>Registration</ModalTitle>
      <ModalText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </ModalText>
      <ModalForm onSubmit={handleSubmit(onSignUpClick)}>
        <ModalLabel htmlFor="name">
          <ModalInput
            {...register("name")}
            type="text"
            placeholder="Name"
            name="name"
            id="name"
          />
        </ModalLabel>
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
        <ModalActionTypeBtn type="submit">Sign Up</ModalActionTypeBtn>
      </ModalForm>
    </div>
  );
};

export default RegistrationModal;
