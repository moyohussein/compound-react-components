import { ReactElement, forwardRef, Ref, useMemo } from "react";
import { classNames, uniq } from "@functions/index";
import { RadioProps } from "@interfaces/RadioProps";

export const Radio = forwardRef(function Input(
  {
    className,
    checked,
    squared = false,
    isReadOnly = false,
    radioSize = "md",
    name,
    onChange,
    id,
    value,
    label,
    isDisabled = false,
    spacing = "md",
    children,
    ...props
  }: RadioProps,
  ref: Ref<HTMLInputElement>
): ReactElement {
  const sizeInputType =
    radioSize === "sm"
      ? "h-3.5 w-3.5 before:h-1.5 before:w-1.5"
      : radioSize === "md"
      ? "h-[20px] w-[20px] before:h-[8px] before:w-[8px]"
      : radioSize === "lg"
      ? "h-[24px] w-[24px] before:h-[10px] before:w-[10px]"
      : radioSize === "xl"
      ? "h-[28px] w-[28px] before:h-[12px] before:w-[12px]"
      : null;

  const idx = uniq(7);

  const sizeLabelType =
    radioSize === "sm"
      ? "text-[14px]"
      : radioSize === "md"
      ? "text-[16px]"
      : radioSize === "lg"
      ? "text-[16px]"
      : radioSize === "xl"
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
          `${sizeInputType} ${squareType} peer input grid place-content-center before:scale-0 border border-gray-300 hover:border-gray-500 focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 checked:bg-blue-500 before:transition-all before:checked:bg-white before:checked:scale-100`
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
