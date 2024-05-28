import { useSelector } from "react-redux";

import {
  LoadMoreBtn,
  LoadMoreWrapper,
  NanniesContainer,
} from "../Nannies/Nannies.styled";

import { selectFavorites } from "../../redux/selectors";
import NannyItem from "../../components/NannyItem/NannyItem";
import { NanniesListStyled } from "../../components/NanniesList/NanniesList.styled";

import { FavoritesSection } from "./Favorites.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <FavoritesSection>
      {favorites?.length > 0 ? (
        <NanniesContainer>
          <NanniesListStyled>
            {favorites?.map((nanny) => (
              <NannyItem nanny={nanny} key={nanny.id} />
            ))}
          </NanniesListStyled>
        </NanniesContainer>
      ) : (
        <div>
          <h2>Choose your favorite babysitters in the catalog.</h2>
        </div>
      )}
      <LoadMoreWrapper>
        <LoadMoreBtn
        // onClick={onLoadMoreBtnClick}
        // style={{ display: isLoadMore ? "block" : "none" }}
        >
          Load More
        </LoadMoreBtn>
      </LoadMoreWrapper>
    </FavoritesSection>
  );
};

export default Favorites;
