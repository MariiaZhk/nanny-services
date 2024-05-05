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

function Home() {
  return (
    <>
      <Header />
      <HeroSection>
        <HeroContainer $url={heroImg && `url(${heroImg})`}>
          <LeftPartWrap>
            <TitleWrap>
              <HeroTitle>Make Life Easier for the Family:</HeroTitle>
              <HeroText>Find Babysitters Online for All Occasions</HeroText>
            </TitleWrap>
            <HeroBtn>
              Get started
              <HeroSvg>
                <use href={`${sprite}#icon-ArrowUp`} />
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
    </>
  );
}

export default Home;
