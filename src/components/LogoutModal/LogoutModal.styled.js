import styled from "styled-components";

export const LogoutModal = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  border: 2px solid white;
  background-color: ${(p) => p.theme.colors.primaryGreenColor};
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.headerText};

  @media (max-width: 1024px) {
    top: -21px;
    right: -22px;
    width: auto;
    height: 130px;
    justify-content: center;
    font-size: 14px;
    padding-inline: 10px;
  }
  @media (max-width: 768px) {
    top: 105%;
    right: 0;
    width: 100%;
    height: auto;
    text-align: center;
    background-color: transparent;
    color: ${(p) => p.theme.colors.primaryBodyText};
    border-color: ${(p) => p.theme.colors.primaryGreenColor};
  }
`;
