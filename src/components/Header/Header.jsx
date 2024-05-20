import { useDispatch } from "react-redux";
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
import {
  changeIsModalOpen,
  changeLoginModal,
  changeRegistrationModal,
} from "../../redux/modalsSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const onLoginClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeLoginModal(true));
  };
  const onRegistrationClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeRegistrationModal(true));
  };
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
          <NavLinkStyled to="favorites">Favorites</NavLinkStyled>
        </Navigation>
        <BtnWrap>
          <Btn type="button" onClick={onLoginClick}>
            Log In
          </Btn>
          <Btn
            type="button"
            onClick={onRegistrationClick}
            $backgroundColor="var(--red)"
            $border="none"
          >
            Registration
          </Btn>
        </BtnWrap>
      </HeaderContainer>
    </HeaderSection>
  );
};
