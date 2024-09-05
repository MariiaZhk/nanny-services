import sprite from "../../assets/sprite.svg";
import { v4 as uuidv4 } from "uuid";
import { CardSvg } from "../NannyItem/NannyItem.styled";
import {
  Rating,
  ReviewComment,
  ReviewHiddenList,
  ReviewImg,
  ReviewerImgWrap,
  ReviewerName,
  SvgRatingWrap,
} from "./NannyItemReviews.styled";

const NannyItemReviews = ({ reviews }) => {
  return (
    <>
      <ReviewHiddenList>
        {reviews?.map(({ reviewer, rating, comment }) => (
          <li key={uuidv4()}>
            <ReviewerImgWrap>
              <ReviewImg>{reviewer.charAt(0)}</ReviewImg>
              <div>
                <ReviewerName>{reviewer}</ReviewerName>
                <SvgRatingWrap>
                  <CardSvg>
                    <use href={`${sprite}#icon-star`} />
                  </CardSvg>
                  <Rating>{rating}</Rating>
                </SvgRatingWrap>
              </div>
            </ReviewerImgWrap>
            <ReviewComment>{comment}</ReviewComment>
          </li>
        ))}
      </ReviewHiddenList>
    </>
  );
};

export default NannyItemReviews;
