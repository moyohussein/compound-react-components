import React, { MouseEvent, ReactElement, ReactNode } from "react";
import { AnimationType, Colors, CustomSizes } from "@definitions/index";

export interface IconButtonProps {
  /**
   * For accessiblity.
   */
  ariaLabel: string;
  /**
   * Color scheme for icon-button, this changes the background color and text e.g `hex codes` or `Colors from tailwind Config`.
   */
  colorScheme?: Colors;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * if `true` button will animate on hover state.
   */
  hoverAnimation?: AnimationType;
  id?: string;
  /**
   * icon Button will show icon.
   */
  icon: ReactNode;
  /**
   * if `true` button will take full width of the parent container.
   */
  isFullWidth?: boolean;
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * onClick event for button, When the button is clicked.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  /**
   * Icon-button sizes: `"xs"| "sm"| "md"| "lg"`.
   */
  size?: CustomSizes;
}
