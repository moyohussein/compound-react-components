import { forwardRef, Ref, ElementType } from "react";
import { classNames } from "@functions/index";
import { ButtonBase, ButtonBaseProps } from "../Button/ButtonBase";
import { ChipProps } from "@interfaces/ChipProps";

function Chip<P extends ElementType = "span">(
  {
    className,
    children,
    size = "sm",
    leftIcon,
    rightIcon,
    spacing = "md",
    ...props
  }: ButtonBaseProps<P> & ChipProps,
  ref: Ref<HTMLSpanElement>
) {
  const sizeType =
    size === "xs"
      ? "text-xs"
      : size === "sm"
      ? "text-sm"
      : size === "md"
      ? "text-base"
      : size === "lg"
      ? "text-lg"
      : null;

  // const iconSize = size === "xs" ? "text-[12px]" :
  // size === "sm" ? "text-[14px]" :
  // size === "md" ? "text-[16px]" :
  // size === "lg" ? "text-[18px]" : null;

  const spacingType =
    spacing === "sm"
      ? "space-x-0.5"
      : spacing === "md"
      ? "space-x-1"
      : spacing === "lg"
      ? "space-x-1.5"
      : spacing === "xl"
      ? "space-x-2"
      : null;

  return (
    <ButtonBase
      {...(props as ButtonBaseProps<any>)}
      // as=""
      ref={ref}
      className={classNames(`${className} ${spacingType} ${sizeType} px-4`)}
    >
      {children}
    </ButtonBase>
  );
}

export default forwardRef(Chip) as typeof Chip;
