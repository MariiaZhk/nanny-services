import { useEffect, useState } from "react";
import NannyItem from "../NannyItem/NannyItem";
import { NanniesListStyled } from "./NanniesList.styled";

const NanniesList = ({ data }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    if (data) {
      const newDataArray = Array.isArray(data) ? data : Object.values(data);
      setDataArray(newDataArray);
    }
  }, [data]);

  return (
    <NanniesListStyled>
      {dataArray?.map((item) => (
        <NannyItem key={item.id} info={item} />
      ))}
    </NanniesListStyled>
  );
};

export default NanniesList;
