import { Placement } from "@popperjs/core";
import { createContext } from "react";
import {
  AlphaSizes,
  Colors,
  CustomVariants,
  Radius,
  Sizes,
  Status,
} from "@definitions/index";

export interface DrawerContext {
  open: boolean;
  toggle: () => void;
  animationDuration: number;
  closeOnOverlayClick?: boolean;
  size: "sm" | "md" | "lg" | "full";
  placement: "top" | "bottom" | "left" | "right";
  trapFocus?: boolean;
  focusLastOnUnlock?: boolean;
  isFullHeight?: boolean;
  autoFocus?: boolean;
  closeOnEsc?: boolean;
  scrollLock?: boolean;
}

export const DrawerCtx = createContext<DrawerContext>({
  open: false,
  toggle: () => {},
  closeOnOverlayClick: true,
  animationDuration: 0.25,
  size: "md",
  placement: "right",
  trapFocus: true,
  focusLastOnUnlock: true,
  isFullHeight: false,
  autoFocus: true,
  closeOnEsc: true,
  scrollLock: true,
});

export interface MenuContext {
  open: boolean;
  toggle: () => void;
  colorScheme: Colors;
  trapFocus?: boolean;
  focusLastOnUnlock?: boolean;
  autoFocus?: boolean;
  closeOnEsc?: boolean;
  animation?: "grow" | "fade" | "collapse";
  arrow?: boolean;
  popperElements: any[];
  referenceElements: any[];
  arrowElements: any[];
  radius?: Radius;
  placement?: Placement;
  verticalOffset?: number;
  horizontalOffset?: number;
  animationDuration?: number;
  borderColor?: "white" | "black" | "grey" | "none";
  spacing?: "sm" | "md" | "lg" | "none";
}

export const MenuCtx = createContext<MenuContext>({
  open: false,
  toggle: () => {},
  colorScheme: "black",
  trapFocus: true,
  spacing: "none",
  focusLastOnUnlock: true,
  placement: "bottom-start",
  radius: "md",
  autoFocus: true,
  arrow: false,
  popperElements: [false, () => {}],
  referenceElements: [false, () => {}],
  arrowElements: [false, () => {}],
  closeOnEsc: true,
  animation: "collapse",
  verticalOffset: 0,
  horizontalOffset: 0,
  animationDuration: 0.25,
  borderColor: "grey",
});

export interface ModalContext {
  open: boolean;
  toggle: () => void;
  disableOverlay?: boolean;
  trapFocus?: boolean;
  focusLastOnUnlock?: boolean;
  scrollBehaviour?: "inside" | "outside";
  isCentered?: boolean;
  closeOnEsc?: boolean;
  scrollLock?: boolean;
  size?: Sizes;
  animation?: "grow" | "fadeUp" | "rotate";
  animationDuration?: number;
  closeOnOverlayClick?: boolean;
}

export const ModalCtx = createContext<ModalContext>({
  open: false,
  toggle: () => {},
  disableOverlay: false,
  trapFocus: true,
  scrollBehaviour: "inside",
  isCentered: false,
  closeOnEsc: true,
  scrollLock: true,
  size: "md",
  animation: "grow",
  animationDuration: 0.25,
  closeOnOverlayClick: true,
});

export const AlertCtx = createContext<AlertContext>({
  status: "success",
  size: "md",
  variant: "solid",
});

export interface AlertContext {
  status: Status;
  size?: AlphaSizes;
  variant?: CustomVariants;
}

interface CardContext {
  fontSize?: "sm" | "md" | "lg" | "xl";
  link?: string;
}

export const CardCtx = createContext<CardContext>({
  fontSize: "md",
  link: "#0",
});

export interface FormControlContext {
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export const FormControlCtx = createContext<FormControlContext>({
  isInvalid: false,
  isRequired: false,
  isDisabled: false,
  isReadOnly: false,
});
