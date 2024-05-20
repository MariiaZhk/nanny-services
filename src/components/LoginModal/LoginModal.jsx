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
} from "./LoginModal.styled";
import { useForm } from "react-hook-form";
import sprite from "../../assets/sprite.svg";

const LoginModal = () => {
  const { register, handleSubmit } = useForm();
  const [eyePass, setEyePass] = useState(false);

  const showEyePass = () => {
    setEyePass(!eyePass);
  };

  return (
    <>
      <ModalTitle>Log In</ModalTitle>
      <ModalText>
        Log In Welcome back! Please enter your credentials to access your
        account and continue your babysitter search.
      </ModalText>
      <ModalForm onSubmit={handleSubmit}>
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
        <ModalLoginBtn type="submit">Log In</ModalLoginBtn>
      </ModalForm>
    </>
  );
};

export default LoginModal;
