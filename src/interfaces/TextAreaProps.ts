import { ChangeEvent } from "react";

export interface TextAreaProps {
  className?: string;
  onChange?: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
  isFullWidth?: boolean;
  readOnly?: boolean;
  resize?: "vertical" | "horizontal" | "both" | "none";
  placeholder?: string;
  fontWeight?:
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "bold"
    | "extrabold";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  id?: string;
  disabled?: boolean;
}
