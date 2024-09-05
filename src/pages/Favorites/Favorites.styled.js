import styled from "styled-components";

export const FavoritesSection = styled.section`
  max-width: 1184px;
  margin: 64px auto;
  @media (max-width: 1210px) {
    padding-inline: 30px;
  }
  @media (max-width: 1024px) {
    padding-inline: 20px;
    margin-block: 40px;
  }
  @media (max-width: 768px) {
    margin-block: 20px;
  }
`;

export const NoFavoritesMessage = styled.div`
  text-align: center;
  margin: 20px;

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 10px;

    a {
      color: var(--red);
      text-decoration: none;
      font-weight: 700;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
