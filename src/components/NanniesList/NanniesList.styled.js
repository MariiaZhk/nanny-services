import styled from "styled-components";

export const NanniesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0 64px 0;
  @media (max-width: 768px) {
    margin: 20px 0 36px 0;
    gap: 24px;
  }
`;
