import {
  HeaderNavWrap,
  Logo,
  LogoWrap,
  NavAuthWrap,
  NavLinkStyled,
  Navigation,
  StyledHeader,
} from "./Header.styled";
import AuthUserBlock from "./AuthBlock/AuthBlock";
import { useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export const Header = () => {
  const { isAuth } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const applyStyles = pathname === "/";
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <StyledHeader $home={applyStyles}>
      <HeaderNavWrap $home={applyStyles}>
        <LogoWrap $home={applyStyles}>
          <Logo to="/">Nanny.Services</Logo>
        </LogoWrap>
        {isMobile || isTablet ? (
          <BurgerMenu />
        ) : (
          <NavAuthWrap $home={applyStyles}>
            <Navigation>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="nannies">Nannies</NavLinkStyled>
              {isAuth && (
                <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
              )}
            </Navigation>

            <AuthUserBlock />
          </NavAuthWrap>
        )}
      </HeaderNavWrap>
    </StyledHeader>
  );
};
