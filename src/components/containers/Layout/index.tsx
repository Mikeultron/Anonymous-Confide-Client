import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
