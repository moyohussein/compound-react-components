import { RefObject } from "react";
import { CustomSizes } from "@definitions/index";

export interface DrawerProps {
  /**
   * 'Required' If `true`, the modal will open.
   */
  open: boolean;
  animationDuration?: number;
  toggle: () => {};
  /**
   * If `true`, the modal will close when the overlay is clicked
   */
  closeOnOverlayClick?: boolean;
  children: React.ReactNode;
  /**
   * Drawer size `"sm" | "md" | "lg" | "full"`
   */
  size?: "sm" | "md" | "lg" | "full";
  /**
   * Drawer placement `"top" | "bottom" | "left" | "right"`
   */
  placement?: "top" | "bottom" | "left" | "right";
  /**
   * If `false`, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.
   */
  trapFocus?: boolean;
  focusLastOnUnlock?: boolean;
  /**
   * If `true` and drawer's placement is top or bottom, the drawer will occupy the viewport height (100vh)
   */
  isFullHeight?: boolean;
  autoFocus?: boolean;
  /**
   * If `true`, the modal will close when the `Esc` key is pressed
   */
  closeOnEsc?: boolean;
  scrollLock?: boolean;
}
export interface DrawerCloseButtonProps {
  /**
   * Button sizes: `"xs"| "sm"| "md"| "lg"`.
   */
  size?: CustomSizes;
  ref?: RefObject<HTMLButtonElement>;
  autoFocus?: boolean;
  /**
   * Add custom icon to Drawer close button.
   */
  icon?: React.ReactNode;
}

export interface DrawerHeaderProps {
  children: React.ReactNode;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
}

export interface DrawerBodyProps {
  children: React.ReactNode;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
}

export interface DrawerFooterProps {
  children: React.ReactNode;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
}

export interface DrawerContentProps {
  className?: string;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  children: React.ReactNode;
  initialIndex?: number | undefined;
}
