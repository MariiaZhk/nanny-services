import styled from "styled-components";

export const ReviewHiddenList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 25px;
`;

export const ReviewImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--light-blue);
  color: var(--blue);
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
`;

export const ReviewerImgWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const SvgRatingWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

export const ReviewerName = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: var(--text-black);
`;
export const Rating = styled.p`
  font-weight: 500;
  line-height: 1.29;
  color: var(--text-black);
`;

export const ReviewComment = styled.p`
  font-size: 16px;
`;
