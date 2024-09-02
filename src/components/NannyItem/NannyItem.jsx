import {
  BtnBox,
  CardContent,
  CardHeaderItem,
  CardHeaderList,
  CardHeaderText,
  CardHeaderWrap,
  CardSvg,
  HeartBtn,
  MakeAppointmentBtn,
  NannyCardItem,
  NannyDataItem,
  NannyDataList,
  NannyDescription,
  NannyItemTitle,
  NannyName,
  NannyText,
  PhotoContainer,
  PhotoWrap,
  PriceSpan,
  ReadMoreBtn,
} from "../NannyItem/NannyItem.styled";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import NannyItemReviews from "../NannytemReviews/NannyItemReviews";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import {
  changeAppointmentModal,
  changeIsModalOpen,
  changePleaseLoginModal,
} from "../../redux/modalsSlice";
import {
  removeFavoriteByIdThunk,
  setUserFavoritesThunk,
} from "../../redux/operations";
import useAuth from "../../utils/hooks/useAuth";
import { useMediaQuery } from "react-responsive";

const NannyItem = ({ nanny }) => {
  const {
    name,
    avatar_url,
    experience,
    reviews,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
    birthday,
    id,
  } = nanny;

  const [isReviewVisible, setIsReviewVisible] = useState(false);
  const favorites = useSelector(selectFavorites) || [];
  const dispatch = useDispatch();
  const { isAuth, currentUser } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isNannyFavorite = () => {
    return favorites.some((fav) => fav.id === id);
  };

  const onHeartBtnClick = () => {
    if (isAuth) {
      if (isNannyFavorite()) {
        dispatch(
          removeFavoriteByIdThunk({
            userId: currentUser.id,
            favoriteId: nanny.id,
          })
        );
      } else {
        const newFavorites = [...favorites, nanny];
        dispatch(
          setUserFavoritesThunk({
            userId: currentUser.id,
            favorites: newFavorites,
          })
        );
      }
    } else {
      dispatch(changeIsModalOpen(true));
      dispatch(changePleaseLoginModal(true));
    }
  };

  const onReadMoreClick = () => {
    setIsReviewVisible(!isReviewVisible);
  };

  const onMakeAppointmentClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeAppointmentModal(true));
  };

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const age = calculateAge(birthday);

  return (
    <>
      <NannyCardItem id={id}>
        {!isMobile && (
          <PhotoContainer>
            <PhotoWrap>
              <img
                src={avatar_url}
                width="96"
                height="96"
                alt="Nanny's avatar"
              />
            </PhotoWrap>
          </PhotoContainer>
        )}
        <CardContent>
          <CardHeaderWrap>
            {isMobile && (
              <PhotoContainer>
                <PhotoWrap>
                  <img
                    src={avatar_url}
                    width="96"
                    height="96"
                    alt="Nanny's avatar"
                  />
                </PhotoWrap>
              </PhotoContainer>
            )}
            <NannyItemTitle>
              <NannyText>Nanny</NannyText>
              <NannyName>{name}</NannyName>
            </NannyItemTitle>
            <CardHeaderList>
              <CardHeaderItem>
                <CardSvg>
                  <use href={`${sprite}#icon-map-pin`} />
                </CardSvg>
                <CardHeaderText>{location}</CardHeaderText>
              </CardHeaderItem>

              <CardHeaderItem>
                <CardSvg>
                  <use href={`${sprite}#icon-star`} />
                </CardSvg>
                <CardHeaderText>Rating: {rating}</CardHeaderText>
              </CardHeaderItem>
              <CardHeaderItem>
                <CardHeaderText>
                  Price / 1 hour: <PriceSpan>{price_per_hour}$</PriceSpan>
                </CardHeaderText>
              </CardHeaderItem>
              <CardHeaderItem>
                <HeartBtn onClick={onHeartBtnClick}>
                  <CardSvg
                    size="26px"
                    fill={isNannyFavorite() ? "var(--red)" : "transparent"}
                    stroke={
                      isNannyFavorite() ? "var(--red)" : "var(--text-black)"
                    }
                  >
                    <use href={`${sprite}#icon-heart`} />
                  </CardSvg>
                </HeartBtn>
              </CardHeaderItem>
            </CardHeaderList>
          </CardHeaderWrap>

          <NannyDataList>
            <NannyDataItem>
              Age: <span>{age}</span>
            </NannyDataItem>
            <NannyDataItem>
              Experience: <span>{experience}</span>
            </NannyDataItem>
            <NannyDataItem>
              Kids Age: <span>{kids_age}</span>
            </NannyDataItem>
            <NannyDataItem>
              Characters: <span>{characters.join(", ")}</span>
            </NannyDataItem>
            <NannyDataItem>
              Education: <span>{education}</span>
            </NannyDataItem>
          </NannyDataList>
          <NannyDescription>{about}</NannyDescription>
          {isReviewVisible && <NannyItemReviews reviews={reviews} />}
          <BtnBox>
            {isReviewVisible ? (
              <>
                <MakeAppointmentBtn
                  type="button"
                  onClick={onMakeAppointmentClick}
                >
                  Make an appointment
                </MakeAppointmentBtn>
                <ReadMoreBtn onClick={onReadMoreClick}>Show less</ReadMoreBtn>
              </>
            ) : (
              <ReadMoreBtn onClick={onReadMoreClick}>Read more</ReadMoreBtn>
            )}
          </BtnBox>
        </CardContent>
      </NannyCardItem>
    </>
  );
};

export default NannyItem;
