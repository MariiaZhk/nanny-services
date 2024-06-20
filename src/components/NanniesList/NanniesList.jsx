import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  LoadMoreBtn,
  LoadMoreWrapper,
} from "../../pages/Nannies/Nannies.styled";
import { selectNannies } from "../../redux/selectors";
import {
  fetchNanniesThunk,
  fetchUserFavoritesThunk,
} from "../../redux/operations";
import { NanniesListStyled } from "./NanniesList.styled";
import NannyItem from "../NannyItem/NannyItem";
import useFilteredPaginatedList from "../../utils/hooks/useFilteredPaginatedList";
import useAuth from "../../utils/hooks/useAuth";

const NanniesList = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const { currentUser } = useAuth();

  const { displayedItems, haveMoreItems, onLoadMoreClick } =
    useFilteredPaginatedList(nannies);

  useEffect(() => {
    dispatch(fetchNanniesThunk());
    if (currentUser) {
      dispatch(fetchUserFavoritesThunk(currentUser.id))
        .unwrap()
        .catch((err) => toast.error(err));
    }
  }, [dispatch, currentUser]);

  return (
    <>
      <NanniesListStyled>
        {displayedItems.map((nanny) => (
          <NannyItem key={nanny.id} nanny={nanny} />
        ))}

        {haveMoreItems && (
          <LoadMoreWrapper>
            <LoadMoreBtn type="button" onClick={onLoadMoreClick}>
              Load More
            </LoadMoreBtn>
          </LoadMoreWrapper>
        )}
      </NanniesListStyled>
    </>
  );
};

export default NanniesList;
