import { SVGProps } from "react";

export interface ILooseObject {
  [key: string]: any;
}

export interface IPayload {
  path?: string;
  params?: { [x: string]: any };
  url?: string;
  type?: string;
  headers?: {};
  body?: {};
}

export interface IButtonTheme {
  background?: string;
  foreground?: string;
}

export interface ISVGProps extends SVGProps<SVGSVGElement> {}
