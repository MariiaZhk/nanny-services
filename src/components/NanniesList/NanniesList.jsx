import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  LoadMoreBtn,
  LoadMoreWrapper,
} from "../../pages/Nannies/Nannies.styled";
import { selectNannies } from "../../redux/selectors";
import { fetchNanniesPerPageThunk } from "../../redux/operations";
import { NanniesListStyled } from "./NanniesList.styled";
import NannyItem from "../NannyItem/NannyItem";

const NanniesList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const nannies = useSelector(selectNannies);

  useEffect(() => {
    dispatch(fetchNanniesPerPageThunk(page))
      .unwrap()
      .catch((err) => toast.error(err));
  }, [dispatch, page]);

  const onLoadMoreBtnClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <>
      <NanniesListStyled>
        {nannies.map((item) => (
          <NannyItem key={item.id} info={item} />
        ))}

        <LoadMoreWrapper>
          <LoadMoreBtn onClick={onLoadMoreBtnClick}>Load More</LoadMoreBtn>
        </LoadMoreWrapper>
      </NanniesListStyled>
    </>
  );
};

export default NanniesList;
