import NanniesList from "../../components/NanniesList/NanniesList";
import { NanniesSection } from "./Nannies.styled";

import Filters from "../../components/Filters/Filters";

const Nannies = () => {
  return (
    <NanniesSection>
      <Filters />
      <NanniesList />
    </NanniesSection>
  );
};

export default Nannies;
