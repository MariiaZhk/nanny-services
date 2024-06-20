import {
  HeaderNavWrap,
  Logo,
  LogoWrap,
  NavLinkStyled,
  Navigation,
  StyledHeader,
  Wrap,
} from "./Header.styled";

import AuthUserBlock from "./AuthBlock/AuthBlock";

import { useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

export const Header = () => {
  const { isAuth } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const applyStyles = pathname === "/";

  return (
    <StyledHeader $home={applyStyles}>
      <HeaderNavWrap $home={applyStyles}>
        <LogoWrap $home={applyStyles}>
          <Logo to="/">Nanny.Services</Logo>
        </LogoWrap>
        <Wrap>
          <Navigation>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="nannies">Nannies</NavLinkStyled>
            {isAuth && <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>}
          </Navigation>

          <AuthUserBlock />
        </Wrap>
      </HeaderNavWrap>
    </StyledHeader>
  );
};
