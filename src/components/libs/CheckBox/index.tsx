import { ReactElement, forwardRef, Ref, useMemo } from "react";
import { classNames, uniq } from "@functions/index";
import { CheckboxProps } from "@interfaces/CheckBoxProps";

export const Checkbox = forwardRef(function Input(
  {
    className,
    checked,
    squared = true,
    isReadOnly = false,
    checkboxSize = "md",
    name,
    onChange,
    id,
    value,
    label,
    isDisabled = false,
    spacing = "md",
    children,
    ...props
  }: CheckboxProps,
  ref: Ref<HTMLInputElement>
): ReactElement {
  const sizeInputType =
    checkboxSize === "sm"
      ? "h-3.5 w-3.5 before:h-3 before:w-3"
      : checkboxSize === "md"
      ? "h-[20px] w-[20px] before:h-[14px] before:w-[14px]"
      : checkboxSize === "lg"
      ? "h-[24px] w-[24px] before:h-[18px] before:w-[18px]"
      : checkboxSize === "xl"
      ? "h-[28px] w-[28px] before:h-[22px] before:w-[22px]"
      : null;

  const idx = uniq(7);

  const sizeLabelType =
    checkboxSize === "sm"
      ? "text-[14px]"
      : checkboxSize === "md"
      ? "text-[16px]"
      : checkboxSize === "lg"
      ? "text-[16px]"
      : checkboxSize === "xl"
      ? "text-[18px]"
      : null;

  const spacingType =
    spacing === "xs"
      ? "space-x-2"
      : spacing === "sm"
      ? "space-x-2.5"
      : spacing === "md"
      ? "space-x-3"
      : spacing === "lg"
      ? "space-x-3.5"
      : spacing === "xl"
      ? "space-x-4"
      : null;

  const squareType = squared ? "rounded-sm before:rounded-sm" : "rounded-full before:rounded-full";
  const handler = !isDisabled ? onChange : undefined;

  return (
    <span className={classNames(`${spacingType} inline-flex items-center `)}>
      <input
        id={idx}
        type="checkbox"
        checked={checked}
        value={label || value}
        ref={ref}
        readOnly={isReadOnly}
        name={name}
        onChange={handler}
        {...props}
        disabled={isDisabled || isReadOnly}
        className={classNames(
          `${sizeInputType} ${squareType} input grid place-content-center before:scale-0 border border-gray-300 hover:border-gray-500 focus:ring-2 focus:ring-gray-500/50 before:transition-all before:checked:bg-blue-500 before:checked:scale-100 before:checked:bg-tick  before:indeterminate:bg-dash `
        )}
      />
      <span
        className={classNames(
          `${className} ${sizeLabelType} peer-disabled:pointer-events-none peer-disabled:text-gray-400 capitalize flex-col flex flex-grow leading-none w-[max-content]`
        )}
      >
        <label htmlFor={idx} className="font-normal">
          {label}
        </label>
        {children}
      </span>
    </span>
  );
});