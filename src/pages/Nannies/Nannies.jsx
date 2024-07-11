import NanniesList from "../../components/NanniesList/NanniesList";
import { NanniesSection } from "./Nannies.styled";

import Filters from "../../components/Filters/Filters";

const Nannies = () => {
  return (
    <NanniesSection>
      <Filters filterType="nannies" />
      <NanniesList filterType="nannies" />
    </NanniesSection>
  );
};

export default Nannies;
