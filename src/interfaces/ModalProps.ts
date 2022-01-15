import { RefObject } from "react";
import { CustomSizes, Sizes } from "@definitions/index";

export interface ModalProps {
  children: React.ReactNode;
  /**
   * If true, the modal will be open. This uses a custom hook, `import useToogle hook` and extract [open, toggle] from it.
   */
  open: boolean;
  /**
   * Toggle Modal with custom hook, `import useToogle hook` and extract [open, toggle] from it.
   */
  toggle: () => void;
  /**
   * If `true`, Modal will not show overlay
   */
  disableOverlay?: boolean;
  /**
   * If `false`, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.
   */
  trapFocus?: boolean;
  focusLastOnUnlock?: boolean;
  /**
   * Where scroll behavior should originate. - If set to `inside`, scroll only occurs within the `ModalBody`. - If set to `outside`, the entire ModalContent will scroll within the viewport.
   */
  scrollBehaviour?: "inside" | "outside";
  /**
   * If true, the modal will be centered on screen.
   */
  isCentered?: boolean;
  /**
   *  If true, the modal will close when the Esc key is pressed.
   */
  closeOnEsc?: boolean;
  scrollLock?: boolean;
  /**
   * Modal sizes: `"xs"| "sm"| "md"| "lg"`.
   */
  size?: Sizes;
  /**
   * The transition that should be used for the modal.
   */
  animation?: "grow" | "fadeUp" | "rotate";
  /**
   * Modal animation duration e.g `0.5`.
   */
  animationDuration?: number;
  /**
   * If true, the modal will close when the overlay is clicked
   */
  closeOnOverlayClick?: boolean;
}

export interface ModalCloseButtonProps {
  /**
   * Button sizes: `"xs"| "sm"| "md"| "lg"`.
   */
  size?: CustomSizes;
  ref?: RefObject<HTMLButtonElement>;
  autoFocus?: boolean;
  /**
   * Add custom icon to modal close button.
   */
  icon?: React.ReactNode;
}

export interface ModalContentProps {
  children: React.ReactNode;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  initialIndex?: number;
}

export interface ModalHeaderProps {
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  children: React.ReactNode;
}

export interface ModalBodyProps {
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  children: React.ReactNode;
}

export interface ModalFooterProps {
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  children: React.ReactNode;
}
