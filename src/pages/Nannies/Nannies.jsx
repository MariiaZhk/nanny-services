import NanniesList from "../../components/NanniesList/NanniesList";
import Filters from "../../components/Filters/Filters";
import { NanniesSection } from "./Nannies.styled";

const Nannies = () => {
  return (
    <NanniesSection>
      <Filters filterType="nannies" />
      <NanniesList filterType="nannies" />
    </NanniesSection>
  );
};

export default Nannies;
