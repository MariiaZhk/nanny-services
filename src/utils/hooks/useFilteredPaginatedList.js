import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredNannies } from "../../redux/nanniesSlice";
import { selectFilter, selectFilteredNannies } from "../../redux/selectors";

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

const useFilteredPaginatedList = (items) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [page, setPage] = useState(1);
  const filteredNannies = useSelector(selectFilteredNannies);

  useEffect(() => {
    const sortedItems = sortNannies(items, filter);
    dispatch(setFilteredNannies(sortedItems));
  }, [dispatch, filter, items]);

  const displayedItems = filteredNannies.slice(0, page * LIMIT);
  const haveMoreItems = page * LIMIT < filteredNannies.length;

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    displayedItems,
    haveMoreItems,
    onLoadMoreClick,
  };
};

export default useFilteredPaginatedList;
