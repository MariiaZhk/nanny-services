import sprite from "../../assets/sprite.svg";
import {
  changeAppointmentModal,
  changeIsModalOpen,
} from "../../redux/modalsSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  MakeAppointmentBtn,
  Rating,
  ReviewComment,
  ReviewHiddenList,
  ReviewImg,
  ReviewerImgWrap,
  ReviewerName,
  SvgRatingWrap,
} from "./NannyItemReviews.styled";
import { CardSvg } from "../NannyItem/NannyItem.styled";

const NannyItemReviews = ({ reviews }) => {
  const dispatch = useDispatch();

  const onMakeAppointmentClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeAppointmentModal(true));
  };

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
      <MakeAppointmentBtn type="button" onClick={onMakeAppointmentClick}>
        Make an appointment
      </MakeAppointmentBtn>
    </>
  );
};

export default NannyItemReviews;
