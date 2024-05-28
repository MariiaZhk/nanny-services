import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  max-width: 100%;
  position: ${({ $home }) => ($home ? "absolute" : "static")};
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${({ $home }) => ($home ? "transparent" : "var(--red)")};
  border-bottom: ${({ $home }) =>
    $home ? "  1px solid var(--button-border)" : "none"};

  padding-inline: ${({ $home }) => ($home ? "128px" : "0")};
  width: ${({ $home }) => ($home ? "100%" : "100%")};
  color: var(--white);
`;

export const HeaderNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  margin: 0 auto;
  max-width: 1184px;
`;

export const LogoWrap = styled.div`
  padding-right: ${({ $home }) => ($home ? "0px" : "180px")};
`;
export const Wrap = styled.div`
  display: flex;
  gap: 92px;
`;
export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`;
export const NavLinkStyled = styled(NavLink)`
  position: relative;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;

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
