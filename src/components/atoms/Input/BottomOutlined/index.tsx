import { InputHTMLAttributes } from "react";
import { colors } from "utils";
import Input from "..";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

function BottomOutlined({ ...rest }: IProps) {
  return (
    <Input
      style={{
        border: "none",
        borderBottom: `1px solid ${colors.black[40]}`,
        color: colors.black[80],
        borderRadius: 0,
      }}
      {...rest}
    />
  );
}

export default BottomOutlined;
