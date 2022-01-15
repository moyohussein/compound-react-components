import { ChangeEvent, ReactNode } from "react";
import { Colors } from "@definitions/index";

export interface InputProps {
  className?: string;
  initialValue?: string | number | undefined;
  onChange?: (ev: ChangeEvent) => void;
  onClearClick?: (ev: MouseEvent) => void;
  isFullWidth?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  focusShadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
  placeholder?: string;
  clearable?: boolean;
  fontWeight?:
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "bold"
    | "extrabold";
  opacityOnHover?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  id?: string;
  isDisabled?: boolean;
}

export interface InputGroupProps {
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
  readOnly?: boolean;
  opacityOnHover?: boolean;
  colorScheme?: Colors;
  fontWeight?: "extralight" | "light" | "normal" | "bold" | "extrabold";
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "none";
  focusRing?: boolean;
  focusShadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "outline" | "filled" | "standard";
}
