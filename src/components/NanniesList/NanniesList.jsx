import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  LoadMoreBtn,
  LoadMoreWrapper,
} from "../../pages/Nannies/Nannies.styled";
import {
  selectFilter,
  selectFilteredNannies,
  selectNannies,
} from "../../redux/selectors";
import { fetchNanniesThunk } from "../../redux/operations";
import { NanniesListStyled } from "./NanniesList.styled";
import NannyItem from "../NannyItem/NannyItem";
import { setFilteredNannies } from "../../redux/nanniesSlice";

const LIMIT = 3;

const sortNannies = (nannies, filter) => {
  return [...nannies].sort((a, b) => {
    switch (filter) {
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "price-less":
        return a.price_per_hour - b.price_per_hour;
      case "price-greater":
        return b.price_per_hour - a.price_per_hour;
      case "popular":
        return b.rating - a.rating;
      case "not-popular":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });
};

const NanniesList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const nannies = useSelector(selectNannies);
  const filter = useSelector(selectFilter);
  const filteredNannies = useSelector(selectFilteredNannies);

  useEffect(() => {
    dispatch(fetchNanniesThunk())
      .unwrap()
      .catch((err) => toast.error(err));
  }, [dispatch]);

  useEffect(() => {
    const sortedNannies = sortNannies(nannies, filter);
    setPage(1);
    dispatch(setFilteredNannies(sortedNannies));
  }, [dispatch, filter, nannies]);

  const displayedNannies = filteredNannies.slice(0, page * LIMIT);
  const hasMoreNannies = page * LIMIT < filteredNannies.length;

  const onLoadMoreBtnClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <NanniesListStyled>
        {displayedNannies.map((nanny) => (
          <NannyItem key={nanny.id} nanny={nanny} />
        ))}

        {hasMoreNannies && (
          <LoadMoreWrapper>
            <LoadMoreBtn type="button" onClick={onLoadMoreBtnClick}>
              Load More
            </LoadMoreBtn>
          </LoadMoreWrapper>
        )}
      </NanniesListStyled>
    </>
  );
};

export default NanniesList;
