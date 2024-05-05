import {
  Btn,
  BtnWrap,
  HeaderContainer,
  HeaderSection,
  Logo,
  LogoWrap,
  NavLinkStyled,
  Navigation,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoWrap>
          <Logo href="/" aria-label="To home page">
            Nanny.Services
          </Logo>
        </LogoWrap>
        <Navigation>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="nannies">Nannies</NavLinkStyled>
          {/* <NavLink to="favorites">Favorites</NavLink> */}
        </Navigation>
        <BtnWrap>
          <Btn>Log In</Btn>
          <Btn $backgroundColor="#f03f3b" $border="none">
            Registration
          </Btn>
        </BtnWrap>
      </HeaderContainer>
    </HeaderSection>
  );
};
