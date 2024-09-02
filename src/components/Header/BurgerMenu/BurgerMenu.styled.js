import styled from "styled-components";
import { Navigation, NavLinkStyled } from "../Header.styled";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-50%")};
  width: 50%;
  height: 100%;
  background-color: var(--red);
  transition: right 0.3s ease-in-out;
  z-index: 3;
  padding: 120px 20px;
  @media (max-width: 480px) {
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-70%")};
    width: 70%;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;
export const StyledNavigationBurger = styled(Navigation)`
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledLinkBurger = styled(NavLinkStyled)`
  font-size: 36px;
  &.active {
    &::after {
      width: 14px;
      height: 14px;
      top: 50%;
      left: -30px;
      transform: translateY(-50%);
      background-color: var(--white);
    }
  }
  &:hover,
  &:focus {
    scale: 1.06;
  }
`;
