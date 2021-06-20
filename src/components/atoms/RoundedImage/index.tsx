import { ImgHTMLAttributes } from "react";
import { fontSize, SpinnerSizeType } from "utils";
import { Image } from "./styles";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Defines the size of the image
   */
  size?: SpinnerSizeType;
}

function RoundedImage({ size, ...rest }: IProps) {
  const calculateSize = () => {
    switch (size) {
      case "S":
        return fontSize.S;
      case "M":
        return fontSize.M;
      case "L":
        return fontSize.L;
      case "XL":
        return fontSize.XL;
      default:
        return fontSize.M;
    }
  };
  const imageSize = calculateSize();
  return <Image width={imageSize} height={imageSize} {...rest} />;
}

export default RoundedImage;
