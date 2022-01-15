import { ReactElement, ReactNode } from "react";
import { AlphaSizes, CustomSizes } from "@definitions/index";

export interface ChipProps {
  className?: string;
  size?: CustomSizes;
  spacing?: AlphaSizes;
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}
