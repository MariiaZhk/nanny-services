import { Header } from "../../components/Header/Header";
import {
  HeroBtn,
  HeroContainer,
  HeroSection,
  HeroSvg,
  HeroText,
  HeroTitle,
  InfoNumber,
  InfoText,
  InfoWrap,
  LeftPartWrap,
  RightPartWrap,
  SvgWrap,
  TitleWrap,
} from "./Home.styled";
import sprite from "../../assets/sprite.svg";
import heroImg from "../../assets/hero@2x.png";
import { useDispatch } from "react-redux";
import {
  changeIsModalOpen,
  changeRegistrationModal,
} from "../../redux/modalsSlice";
import Container from "../../components/Container/Container";

function Home() {
  const dispatch = useDispatch();
  const onRegistrationClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeRegistrationModal(true));
  };
  return (
    <Container>
      <Header onRegistrationClick={onRegistrationClick} />

      <HeroSection>
        <HeroContainer $url={heroImg && `url(${heroImg})`}>
          <LeftPartWrap>
            <TitleWrap>
              <HeroTitle>Make Life Easier for the Family:</HeroTitle>
              <HeroText>Find Babysitters Online for All Occasions</HeroText>
            </TitleWrap>
            <HeroBtn type="button" onClick={onRegistrationClick}>
              Get started
              <HeroSvg size="18px">
                <use href={`${sprite}#icon-ArrowUp`} />
              </HeroSvg>
              <HeroSvg size="18px">
                <use href={`${sprite}#icon-ArrowRight`} />
              </HeroSvg>
            </HeroBtn>
          </LeftPartWrap>
          <RightPartWrap>
            <SvgWrap>
              <HeroSvg size="30px">
                <use href={`${sprite}#icon-check`} />
              </HeroSvg>
            </SvgWrap>
            <InfoWrap>
              <InfoText>Experienced nannies</InfoText>
              <InfoNumber>15,000</InfoNumber>
            </InfoWrap>
          </RightPartWrap>
        </HeroContainer>
      </HeroSection>
    </Container>
  );
}

export default Home;
