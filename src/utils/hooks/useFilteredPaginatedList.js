import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredItems } from "../../redux/nanniesSlice";
import {
  selectFilter,
  selectFilteredFavorites,
  selectFilteredNannies,
} from "../../redux/selectors";

const LIMIT = 3;

const sortItems = (items, filter) => {
  return [...items].sort((a, b) => {
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

const useFilteredPaginatedList = (items, filterType) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => selectFilter(state)[filterType]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const sortedItems = sortItems(items, filter);
    dispatch(setFilteredItems({ type: filterType, items: sortedItems }));
  }, [dispatch, filter, items, filterType]);

  const filteredItems = useSelector((state) =>
    filterType === "nannies"
      ? selectFilteredNannies(state)
      : selectFilteredFavorites(state)
  );

  const displayedItems = filteredItems.slice(0, page * LIMIT);
  const haveMoreItems = page * LIMIT < filteredItems.length;

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
