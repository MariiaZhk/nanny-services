import styled from "styled-components";

export const NannyCardItem = styled.li`
  display: flex;
  align-items: flex-start;
  max-width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background-color: var(--background-hero);
  @media (max-width: 1024px) {
    padding: 18px;
    border-radius: 18px;
  }
  @media (max-width: 768px) {
    position: relative;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 120px;
  padding: 12px;
  margin-right: 24px;
  border-radius: 30px;
  border: 2px solid var(--pink);
  &::after {
    position: absolute;
    right: 14px;
    top: 9px;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: var(--text-price);
  }
  margin-right: 24px;
  @media (max-width: 1024px) {
    border-radius: 24px;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const PhotoWrap = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 15px;
  overflow: hidden;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 992px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 14px;
    align-items: center;
    gap: 18px;
  }
  @media (max-width: 530px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const NannyItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NannyText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-filter);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardHeaderList = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const CardHeaderItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-black);

  &:nth-child(1),
  &:nth-child(2) {
    p {
      padding-left: 8px;
    }
    &:after {
      color: rgba(17, 16, 28, 0.2);
      margin-right: 16px;
      padding-left: 16px;
      content: "|";
    }
  }
  &:last-child {
    margin-left: 48px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const CardHeaderText = styled.p`
  font-weight: 500;
  line-height: 1.5;
`;
export const PriceSpan = styled.span`
  color: var(--text-price);
`;

export const HeartBtn = styled.button`
  border: none;
  background-color: transparent;

  @media (max-width: 768px) {
    position: absolute;
    top: 16px;
    right: 10px;
  }
`;

export const CardSvg = styled.svg`
  width: ${(props) => props.size || "16px"};
  height: ${(props) => props.size || "16px"};
  stroke: ${(props) => props.stroke || "var(--text-black)"};
  fill: ${(props) => props.fill || "transparent"};
  &:hover {
    stroke: var(--red);
    transform: scale(1.1);
  }
`;
export const NannyName = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: var(--text-black);
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const NannyDataList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const NannyDataItem = styled.li`
  border-radius: 24px;
  padding: 8px 16px;
  background-color: var(--background-primary);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  span {
    color: var(--text-black);
  }
  &:first-child span {
    text-decoration: underline;
  }
`;
export const NannyDescription = styled.p`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ReviewBtnBox = styled.div`
  display: flex;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ReadMoreBtn = styled.button`
  display: flex;
  margin-top: 14px;
  padding: 0;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--text-black);
  background-color: transparent;
  &:hover {
    color: var(--red);
  }
`;
export const MakeAppointmentBtn = styled.button`
  max-width: 215px;
  padding: 14px 28px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: var(--white);
  border-radius: 30px;
  background-color: var(--red);
  border: none;

  &:hover {
    color: var(--red);
    background-color: var(--pink);
  }
`;
