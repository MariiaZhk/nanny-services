import styled from "styled-components";

export const NanniesSection = styled.section`
  max-width: 1184px;
  margin: 64px auto;
`;

export const NanniesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1184px;
  margin: 0 auto;
`;

export const LoadMoreWrapper = styled.div`
  text-align: center;
`;

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  border-radius: 30px;
  padding: 14px 40px;
  background-color: var(--red);
  color: white;
  border: none;
  &:hover {
    color: var(--red);
    background-color: var(--white);
  }
`;
