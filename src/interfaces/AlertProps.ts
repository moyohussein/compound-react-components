import { ReactElement, ReactNode } from "react";
import { AlphaDirection, AlphaSizes, CustomVariants, Status } from "@definitions/index";

export interface AlertProps {
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  children?: ReactNode;
  /**
   * Alert direction `"column" | "row"`.
   */
  direction?: AlphaDirection;
  /**
   * Alert sizes: ` "sm"| "md"| "lg" | "xl"`.
   */
  size?: AlphaSizes;
  /**
   * The status of the alert: ` "success"| "warning"| "error" | "info"`.
   */
  status?: Status;
  /**
   * The variant of the alert: ` "subtle"| "solid"| "top-accent" | "left-accent"`.
   */
  variant?: CustomVariants;
}

export interface AlertIconProps {
  className?: string;
  /**
   * The icon for the alert.
   */
  icon?: ReactElement;
}

export interface AlertTitleProps {
  className?: string;
  /**
   * The title for the alert.
   */
  title?: string;
}

export interface AlertDescriptionProps {
  className?: string;
  /**
   * The description for the alert.
   */
  description?: string;
}
