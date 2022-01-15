import { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from "react";

export interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
  checkboxSize?: "sm" | "md" | "lg" | "xl";
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
  name?: string;
  checked?: boolean;
  squared?: boolean;
  id?: string;
  value?: string | number;
  label: string;
  children?: string;
  isDisabled?: boolean;
}

export interface CheckboxGroupProps {
  children: ReactNode[];
  className?: string;
  name?: string;
  value?: string;
  onChange?: (newValue: string[]) => void;
  checkboxSize?: "xs" | "sm" | "md" | "lg";
  direction?: "column" | "row";
  spacing?: "sm" | "md" | "lg" | "xl";
  defaultValue?: string | number | undefined;
}
