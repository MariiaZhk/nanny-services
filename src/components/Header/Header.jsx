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
  Wrap,
} from "./Header.styled";
import { changeIsModalOpen, changeLoginModal } from "../../redux/modalsSlice";

export const Header = ({ onRegistrationClick }) => {
  const dispatch = useDispatch();

  const onLoginClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeLoginModal(true));
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <Wrap>
          <LogoWrap>
            <Logo href="/" aria-label="To home page">
              Nanny.Services
            </Logo>
          </LogoWrap>
          <div>
            <Navigation>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="nannies">Nannies</NavLinkStyled>
              <NavLinkStyled to="favorites">Favorites</NavLinkStyled>
            </Navigation>{" "}
          </div>
        </Wrap>
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
