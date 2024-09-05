import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 11, 11, 0.6);
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-height: 768px) {
    max-height: 680px;
  }
  @media (max-height: 540px) {
    max-height: 450px;
  }
`;
export const ModalStyled = styled.div`
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px;
  z-index: 200;
  border-radius: 30px;
  background-color: var(--white);
  color: var(--text-black);
  font-size: 16px;
  max-width: 565px;
  min-width: 300px;
  /* overflow: hidden; */
  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ModalSvg = styled.svg`
  width: ${(props) => props.size || "20px"};
  height: ${(props) => props.size || "20px"};
  stroke: ${(props) => props.color || "var(--text-black)"};
  fill: transparent;
`;

export const BtnClose = styled.button`
  position: absolute;
  right: ${(props) => props.size || "20px"};
  top: ${(props) => props.size || "20px"};
  border: none;
  background-color: transparent;
  width: ${(props) => props.width || "32px"};
  height: ${(props) => props.height || "32px"};
  padding: 0;
  transition: scale 300ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.4;
  }
  @media (max-width: 768px) {
    right: ${(props) => props.size || "16px"};
    top: ${(props) => props.size || "16px"};
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: normal;
  }
`;
export const ModalText = styled.p`
  max-width: 438px;
  margin-bottom: ${(props) => props.$marginBottom || "40px"};
  color: var(--text-grey);
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 565px;
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

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  height: auto;
  padding: 16px 18px;
  border: 1px solid var(--inputs-border);
  border-radius: 12px;
  outline: none;
  resize: vertical;

  &::placeholder {
    color: var(--text-black);
  }

  &:hover {
    border: 1px solid var(--text-black);
  }
`;

export const ModalInputsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & > * {
    flex-grow: 1;
    flex-basis: 50%;
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

export const ModalActionTypeBtn = styled.button`
  margin-top: 22px;
  border-radius: 30px;
  padding: 16px 32px;
  width: 100%;
  max-width: 438px;
  border: none;
  outline: none;
  background-color: var(--red);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: var(--pink);
    color: var(--red);
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
`;

// export const BtnsWrap = styled.div`
// display: flex;
// flex-direction`;

// export const ModalClockBtn = styled.div`
//   top: 16px;
//   right: 16px;
//   position: absolute;
//   background-color: transparent;
//   border: none;
//   padding: 0;
//   height: 20px;
//   width: 20px;
//   z-index: 99;
// `;

export const StyledSpan = styled.span`
  color: var(--red);
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: var(--pink);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--red);
  position: absolute;
  bottom: -16px;
  padding: 0px 18px;
  font-size: 12px;
  line-height: 1.3;
`;

export const SuccessMessage = styled.p`
  color: var(--red);
  font-size: 26px;
  text-align: center;
`;
