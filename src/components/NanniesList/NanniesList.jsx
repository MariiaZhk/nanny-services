import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NanniesListStyled } from "./NanniesList.styled";
import NannyItem from "../NannyItem/NannyItem";
import useFilteredPaginatedList from "../../utils/hooks/useFilteredPaginatedList";
import useAuth from "../../utils/hooks/useAuth";
import { selectNannies } from "../../redux/selectors";
import {
  LoadMoreBtn,
  LoadMoreWrapper,
} from "../../pages/Nannies/Nannies.styled";
import {
  fetchNanniesThunk,
  fetchUserFavoritesThunk,
} from "../../redux/operations";

const NanniesList = ({ filterType }) => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const { currentUser } = useAuth();
  const { displayedItems, haveMoreItems, onLoadMoreClick } =
    useFilteredPaginatedList(nannies, filterType);

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
