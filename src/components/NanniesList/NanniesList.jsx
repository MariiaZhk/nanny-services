import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  LoadMoreBtn,
  LoadMoreWrapper,
} from "../../pages/Nannies/Nannies.styled";
import { selectIsLoadMore, selectNannies } from "../../redux/selectors";
import { fetchNanniesPerPageThunk } from "../../redux/operations";
import { NanniesListStyled } from "./NanniesList.styled";
import NannyItem from "../NannyItem/NannyItem";

const NanniesList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const nannies = useSelector(selectNannies);
  const isLoadMore = useSelector(selectIsLoadMore);

  useEffect(() => {
    dispatch(fetchNanniesPerPageThunk(page))
      .unwrap()
      .catch((err) => toast.error(err));
  }, [dispatch, page]);

  const onLoadMoreBtnClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <NanniesListStyled>
        {nannies.map((nanny) => (
          <NannyItem key={nanny.id} nanny={nanny} />
        ))}

        <LoadMoreWrapper>
          <LoadMoreBtn
            type="button"
            onClick={onLoadMoreBtnClick}
            // style={{ display: isLoadMore ? "block" : "none" }}
          >
            Load More
          </LoadMoreBtn>
        </LoadMoreWrapper>
      </NanniesListStyled>
    </>
  );
};

export default NanniesList;
