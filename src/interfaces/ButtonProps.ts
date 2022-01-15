import { MouseEvent } from "react";
import {
  AnimationType,
  Colors,
  CustomSizes,
  Radius,
  Spacing,
  Variants,
} from "@definitions/index";

export interface ButtonProps {
  /**
   * if `true` button will animate on hover state.
   */
  animateOnHover?: boolean;
  /**
   * For accessiblity.
   */
  ariaLabel?: string;
  /**
   * Color scheme for button, this changes the background color and text from tailwind Config`.
   */
  colorScheme?: Colors;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  children: React.ReactNode;
  /**
   * Add Animation to Button: `"wiggle"| "grow"| "roll"`.
   */
  groupHoverAnimation?: AnimationType;
  id?: string;
  /**
   * The space between the button icon and label e.g `"sm" | "md" | "lg" | "xl"`.
   */
  iconSpacing?: Spacing;
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * if `true` button will take full width of the parent container.
   */
  isFullWidth?: boolean;
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * If added, the button will show an icon before the button's label.
   */
  leftIcon?: React.ReactElement;
  /**
   * The label to show in the button when `isLoading` is true If no text is passed, it shows `loading...` as the text
   */
  loadingText?: string;
  /**
   * if `true` button will have opacity on hover state.
   */
  opacityOnHover?: boolean;
  /**
   * onClick event for button, When the button is clicked.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  /**
   * If added, the button will show an icon after the button's label.
   */
  rightIcon?: React.ReactElement;
  /**
   * Border radius for button `'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'`.
   */
  radius?: Radius;
  /**
   * Button sizes: `"xs"| "sm"| "md"| "lg"`.
   */
  size?: CustomSizes;
  /**
   * Button variants: `"solid" | "outline" | "ghost"`.
   */
  variant?: Variants;
}
