import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.section`
  position: absolute;
  z-index: 10;
  top: 32px;
  left: 0;
  background-color: transparent;
  border-bottom: 1px solid var(--button-border);
`;
export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 30px 96px;
  color: var(--white);
`;

export const LogoWrap = styled.div`
  margin-right: 487px;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  margin-right: 92px;
`;
export const NavLinkStyled = styled(NavLink)`
  position: relative;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-bottom: 12px;

  &.active {
    &:after {
      position: absolute;
      bottom: -12px;
      left: calc(100% / 2 - 4px);
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const Btn = styled.button`
  border: ${(props) => props.$border || "1px solid rgba(251, 251, 251, 0.4)"};
  border-radius: 30px;
  padding: 14px 39px;
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: inherit;
`;
