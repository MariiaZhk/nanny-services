import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registration } from "../../redux/authSlice";
import { closeModals } from "../../redux/modalsSlice";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidationSchema } from "../../utils/schemas/authSchema";
import sprite from "../../assets/sprite.svg";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
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
} from "../Modal/Modal.styled";

const RegistrationModal = () => {
  const dispatch = useDispatch();
  const [eyePass, setEyePass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationValidationSchema),
  });

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
        toast.info("User with this email already exists. Please, login.");
      } else {
        toast.error("An error occurred during registration. Please try again.");
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
            name="name"
            id="name"
            placeholder="Name"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Name")}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </ModalLabel>
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
        <ModalActionTypeBtn type="submit">Sign Up</ModalActionTypeBtn>
      </ModalForm>
    </div>
  );
};

export default RegistrationModal;
