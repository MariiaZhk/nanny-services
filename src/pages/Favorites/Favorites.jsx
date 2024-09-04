import { useSelector } from "react-redux";
import {
  LoadMoreBtn,
  LoadMoreWrapper,
  NanniesContainer,
} from "../Nannies/Nannies.styled";
import { selectFavorites } from "../../redux/selectors";
import NannyItem from "../../components/NannyItem/NannyItem";
import { NanniesListStyled } from "../../components/NanniesList/NanniesList.styled";

import { FavoritesSection, NoFavoritesMessage } from "./Favorites.styled";
import Filters from "../../components/Filters/Filters";
import useFilteredPaginatedList from "../../utils/hooks/useFilteredPaginatedList";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const { displayedItems, haveMoreItems, onLoadMoreClick } =
    useFilteredPaginatedList(favorites, "favorites");

  return (
    <FavoritesSection>
      {favorites?.length > 0 ? (
        <>
          <Filters filterType="favorites" />
          <NanniesContainer>
            <NanniesListStyled>
              {displayedItems?.map((nanny) => (
                <NannyItem nanny={nanny} key={nanny.id} />
              ))}
            </NanniesListStyled>
          </NanniesContainer>
        </>
      ) : (
        <NoFavoritesMessage>
          <h2>
            Choose your favorite babysitters in the{" "}
            <Link to="/nannies">catalog</Link>.
          </h2>
        </NoFavoritesMessage>
      )}
      {haveMoreItems && (
        <LoadMoreWrapper>
          <LoadMoreBtn type="button" onClick={onLoadMoreClick}>
            Load More
          </LoadMoreBtn>
        </LoadMoreWrapper>
      )}
    </FavoritesSection>
  );
};

export default Favorites;
