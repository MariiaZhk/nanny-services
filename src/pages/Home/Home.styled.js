import styled from "styled-components";

export const HeroSection = styled.section`
  margin: 0 auto;
  padding: 32px;
  width: 100%;
  background-color: var(--background-hero);
`;

export const HeroContainer = styled.div`
  position: relative;
  max-width: 1376px;
  margin: 0 auto;
  padding: 251px 96px 163px 96px;
  background-color: var(--red);
  background-image: ${(props) => props.$url || "none"};
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
  border-radius: 30px;
  color: var(--white);
`;

export const LeftPartWrap = styled.div`
  max-width: 517px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const HeroTitle = styled.h1`
  font-size: 70px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2.1px;
`;

export const HeroText = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -0.56px;
`;

export const HeroBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 18px 50px;
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  background-color: transparent;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
  position: relative;
  svg {
    display: inline-block;
  }

  svg:last-of-type {
    display: none;
  }
  &:hover {
    & > svg {
      display: none;
    }

    & > svg:last-of-type {
      display: inline-block;
    }
  }
`;

export const HeroSvg = styled.svg`
  width: ${(props) => props.size || "18px"};
  height: ${(props) => props.size || "18px"};
  fill: var(--background-hero);
`;

export const RightPartWrap = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 284px;
  height: 118px;
  bottom: 50px;
  right: 50px;
  padding: 32px;
  border-radius: 20px;
  background-color: var(--background-hero);
`;

export const SvgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background: var(--red);
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  letter-spacing: -0.3px;
  color: var(--text-grey);
`;

export const InfoNumber = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-black);
`;
