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
`;
export const ModalStyled = styled.div`
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px;
  z-index: 200;
  border-radius: 30px;
  background-color: var(--white);
  color: var(--text-black);
  font-size: 16px;
`;

export const BtnClose = styled.button`
  position: absolute;
  right: ${(props) => props.size || "20px"};
  top: ${(props) => props.size || "20px"};
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  padding: 0;
  transition: scale 300ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.4;
  }
`;

export const SvgBtnClose = styled.svg`
  width: 20px;
  height: 20px;
  stroke-width: 2.5px;
  stroke: var(--text-black);
`;
