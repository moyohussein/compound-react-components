import { ReactNode } from "react";
import { CustomSizes } from "@definitions/index";

export interface BadgeProps {
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  /**
   * Alert sizes: ` "xs"| "sm"| "md" | "lg"`.
   */
  children: ReactNode;
  size?: CustomSizes;
}
