import styled from "styled-components";

export const StyledAuthBlock = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 1024px) {
    position: relative;
    &::after {
      content: "";
      bottom: -50px;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: var(--white);
    }
  }
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;

  @media (max-width: 768px) {
    gap: 14px;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    letter-spacing: -0.01em;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const IconWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--white);
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const UserSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-hero);
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const AuthBtnWrap = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 1024px) {
    gap: 30px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 14px;
  }
`;

export const AuthBtn = styled.button`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 14px 39px;
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: inherit;
  outline: none;
  &:hover {
    background-color: var(--white);
    color: var(--red);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding-inline: 14px;
  }
`;
