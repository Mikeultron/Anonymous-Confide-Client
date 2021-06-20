import { HTMLAttributes } from "react";
import { SpinnerSizeType, SpinnerType } from "utils";
import Normal from "./Normal";
import Ripple from "./Ripple";

export interface ISpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Defines the spinner size
   * `Default: L`
   */
  size?: SpinnerSizeType;
  /**
   * Defines the spinner types
   * `Default: normal`
   */
  type?: SpinnerType;
}

function Spinner({ size, type, ...rest }: ISpinnerProps) {
  const renderSpinner = () => {
    switch (type) {
      case "ripple":
        return <Ripple />;
      default:
        return <Normal />;
    }
  };
  return <>{renderSpinner()}</>;
}

export default Spinner;
