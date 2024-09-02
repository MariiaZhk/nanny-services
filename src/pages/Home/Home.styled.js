import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  max-width: 1376px;
  margin: 32px;
  border-radius: 30px;
  height: calc(100lvh - 64px);
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--background-hero);
  color: var(--white);
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
    margin: 0;
  }
`;

export const LeftPartWrap = styled.div`
  width: 517px;
  flex: 1 1 49.5%;
  display: flex;
  flex-direction: column;
  padding-top: 251px;
  padding-right: 64px;
  padding-bottom: 15px;
  padding-left: 96px;
  background-color: var(--red);
  @media (max-width: 768px) {
    position: relative;
    max-width: none;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 40px;
    flex: 1 1 40%;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding-top: 120px;
    padding-bottom: 30px;
  }
  @media (max-width: 430px) {
    padding-top: 80px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 64px;
`;

export const HeroTitle = styled.h1`
  font-size: 70px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
  @media (max-width: 768px) {
    max-width: 600px;
    font-size: clamp(30px, 8vw, 50px);
  }
  @media (max-height: 400px) {
    font-size: 30px;
  }
`;

export const HeroText = styled.p`
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const HeroLink = styled(Link)`
  max-width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 18px 50px;
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
  position: relative;
  &:hover {
    box-shadow: 4px 4px 4px rgba(0.2, 0.2, 0.2, 0.2);
  }
  svg {
    display: inline-block;
  }

  svg:last-of-type {
    display: none;
  }
  &:hover {
    svg {
      display: none;
    }

    svg:last-of-type {
      display: inline-block;
    }
  }
  @media (max-width: 1024px) {
    padding: 14px 30px;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 640px) {
    position: static;
    width: 100%;
    max-width: 100%;
  }
`;

export const HeroSvg = styled.svg`
  width: ${(props) => props.size || "18px"};
  height: ${(props) => props.size || "18px"};
  fill: var(--background-hero);
`;

export const RightPartWrap = styled.div`
  flex: 1 1 50.5%;
  height: auto;

  img {
    height: calc(100lvh - 64px);
    width: 100%;
    box-shadow: inset 0 4px 4px 0 rgba(18, 20, 23, 0.6);

    @media (max-width: 768px) {
      height: 100%;
    }
  }
`;

export const InfoWrap = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 20px;
  background-color: var(--white);
  @media (max-width: 470px) {
    bottom: 50px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
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
export const InfoTextWrap = styled.div`
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
