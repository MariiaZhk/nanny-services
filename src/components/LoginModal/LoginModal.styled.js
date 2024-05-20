import styled from "styled-components";

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;
export const ModalText = styled.p`
  max-width: 438px;
  margin-bottom: 40px;
  color: var(--text-grey);
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ModalLabel = styled.label`
  position: relative;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 16px 18px;
  border: 1px solid var(--inputs-border);
  border-radius: 12px;
  outline: none;

  &::placeholder {
    color: var(--text-black);
  }

  &:hover {
    border: 1px solid var(--text-black);
  }
`;

export const ModalEyeBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 30px;
  width: 30px;
  z-index: 99;
`;
export const EyeOpenSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--text-black);
  fill: transparent;
`;

export const EyeCloseSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--text-black);
  fill: transparent;
`;

export const ModalLoginBtn = styled.button`
  margin-top: 22px;
  border-radius: 30px;
  padding: 16px 196px;
  border: none;
  outline: none;
  background-color: var(--red);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s;
  max-width: 438px;
  white-space: nowrap;

  &:hover {
    background-color: var(--white);
    color: var(--red);
  }
`;
