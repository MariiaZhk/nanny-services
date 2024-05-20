import React, { useState } from "react";
import {
  EyeCloseSvg,
  EyeOpenSvg,
  ModalEyeBtn,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalLoginBtn,
  ModalText,
  ModalTitle,
} from "../LoginModal/LoginModal.styled";
import { useForm } from "react-hook-form";
import sprite from "../../assets/sprite.svg";

const RegistrationModal = () => {
  const { register, handleSubmit } = useForm();
  const [eyePass, setEyePass] = useState(false);

  const showEyePass = () => {
    setEyePass(!eyePass);
  };
  return (
    <div>
      <ModalTitle>Registration</ModalTitle>
      <ModalText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </ModalText>
      <ModalForm onSubmit={handleSubmit}>
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
            {eyePass ? (
              <EyeOpenSvg>
                <use href={`${sprite}#icon-eye`} />
              </EyeOpenSvg>
            ) : (
              <EyeCloseSvg>
                <use href={`${sprite}#icon-eye-off`} />
              </EyeCloseSvg>
            )}
          </ModalEyeBtn>
          <ModalInput
            {...register("password")}
            type={eyePass ? "text" : "password"}
            placeholder="Password"
            name="password"
            id="password"
          />
        </ModalLabel>
        <ModalLoginBtn type="submit">Sign Up</ModalLoginBtn>
      </ModalForm>
    </div>
  );
};

export default RegistrationModal;
