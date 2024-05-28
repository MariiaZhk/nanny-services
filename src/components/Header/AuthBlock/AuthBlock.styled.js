import styled from "styled-components";

export const StyledAuthBlock = styled.div`
  display: flex;
  gap: 8px;
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
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
`;

export const UserSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-hero);
`;

export const AuthBtnWrap = styled.div`
  display: flex;
  gap: 8px;
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
`;
