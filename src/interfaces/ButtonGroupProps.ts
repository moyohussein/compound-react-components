import { ReactNode } from "react";
import {
  AlphaDirection,
  AlphaSizes,
  Colors,
  CustomSizes,
  Radius,
  Variants,
} from "@definitions/index";

export interface ButtonGroupProps {
  children: ReactNode[];
  className?: string;
  variant?: Variants;
  radius?: Radius;
  isAttached?: boolean;
  size?: CustomSizes;
  direction?: AlphaDirection;
  spacing?: AlphaSizes;
  isFullWidth?: boolean;
  colorScheme?: Colors;
}
