import { RotatingLines } from "react-loader-spinner";
import { WrapperStyles } from "./Loader.styled";

export const Loader = () => {
  return (
    <WrapperStyles>
      <RotatingLines
        visible={true}
        height="120"
        width="120"
        strokeColor="var(--red)"
        strokeWidth="7"
        ariaLabel="rotating-lines-loading"
      />
    </WrapperStyles>
  );
};
