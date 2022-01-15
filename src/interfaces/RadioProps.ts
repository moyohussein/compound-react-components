import { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from "react";

export interface RadioProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
  radioSize?: "sm" | "md" | "lg" | "xl";
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
  name?: string;
  squared?: boolean;
  id?: string;
  checked?: boolean;
  value?: string | number;
  label: string;
  children?: string;
  isDisabled?: boolean;
}

export interface RadioGroupProps {
  children: ReactNode[];
  className?: string;
  name?: string;
  onChange?: ChangeEvent<HTMLInputElement>;
  radioSize?: "xs" | "sm" | "md" | "lg";
  direction?: "column" | "row";
  spacing?: "sm" | "md" | "lg" | "xl";
  defaultValue?: string | number | undefined;
}
