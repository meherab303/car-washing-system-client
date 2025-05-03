/* eslint-disable prettier/prettier */
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TAuthUser = {
  userEmail: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
};
