import { Placement } from "@popperjs/core";
import { JSXElementConstructor } from "react";
import { Colors, CustomSizes, Radius, Variants } from "@definitions/index";

export interface MenuProps {
  open: boolean;
  toggle: () => {};
  trapFocus?: boolean;
  focusLastOnUnlock?: boolean;
  colorScheme?: Colors;
  autoFocus?: boolean;
  closeOnEsc?: boolean;
  animation?: "grow" | "fade" | "collapse";
  closeOnOutsideClick?: boolean;
  arrow?: boolean;
  radius?: Radius;
  placement?: Placement;
  verticalOffset?: number;
  horizontalOffset?: number;
  animationDuration?: number;
  borderColor?: "white" | "black" | "grey" | "none";
  spacing?: "sm" | "md" | "lg" | "none";
}

export interface MenuButtonProps {
  children: React.ReactNode;
  leftIcon?:
    | React.ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  rightIcon?:
    | React.ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  size?: CustomSizes;
  className?: string;
  grayscale?: boolean | undefined;
  variant?: Variants;
  colorScheme?: Colors;
}

export interface MenuListProps {
  children: React.ReactNode;
  className?: string;
  initialIndex?: number | undefined;
}

export interface MenuGroupProps {
  children: React.ReactNode;
  className?: string;
  title: string;
}

export interface MenuOptionGroupProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  type?: "radio" | "checkbox";
  onChange?: (value: string | string[]) => void;
}

export interface MenuListItemProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => {};
}

export interface MenuListOptionProps {
  children: React.ReactNode;
  className?: string;
  checked?: boolean;
  type?: "menuitemradio" | "menuitemcheckbox";
  disabled?: boolean;
  value: string;
  onClick?: () => {};
}
