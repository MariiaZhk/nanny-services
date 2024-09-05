import sprite from "../../assets/sprite.svg";
import heroImg from "../../assets/hero@2x.png";
import {
  HeroLink,
  HeroSection,
  HeroSvg,
  HeroText,
  HeroTitle,
  InfoNumber,
  InfoText,
  InfoTextWrap,
  InfoWrap,
  LeftPartWrap,
  RightPartWrap,
  SvgWrap,
  TitleWrap,
} from "./Home.styled";

function Home() {
  return (
    <HeroSection>
      <LeftPartWrap>
        <TitleWrap>
          <HeroTitle>Make Life Easier for the Family:</HeroTitle>
          <HeroText>Find Babysitters Online for All Occasions</HeroText>
        </TitleWrap>
        <HeroLink to={"/nannies"}>
          Get started
          <HeroSvg size="18px">
            <use href={`${sprite}#icon-ArrowUp`} />
          </HeroSvg>
          <HeroSvg size="18px">
            <use href={`${sprite}#icon-ArrowRight`} />
          </HeroSvg>
        </HeroLink>
      </LeftPartWrap>
      <RightPartWrap>
        <img src={heroImg} />

        <InfoWrap>
          <SvgWrap>
            <HeroSvg size="30px">
              <use href={`${sprite}#icon-check`} />
            </HeroSvg>
          </SvgWrap>
          <InfoTextWrap>
            <InfoText>Experienced nannies</InfoText>
            <InfoNumber>15,000</InfoNumber>
          </InfoTextWrap>
        </InfoWrap>
      </RightPartWrap>
    </HeroSection>
  );
}

export default Home;
