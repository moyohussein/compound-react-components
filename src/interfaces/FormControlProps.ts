import { ElementType, ReactNode } from "react";

export interface FormControlProps {
  className?: string;
  children: ReactNode;
  as?: ElementType<any>;
  direction?: "column" | "row";
  spacing?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export interface FormLabelProps {
  className?: string;
  as?: ElementType<any>;
  label?: string;
  htmlFor?: string | number;
  isRequired?: boolean;
}

export interface FormHelperTextProps {
  className?: string;
  children?: ReactNode;
  id?: string | undefined;
}

export interface FormErrorMessageProps {
  className?: string;
  children?: string;
  id?: string;
  isInvalid?: boolean;
}
