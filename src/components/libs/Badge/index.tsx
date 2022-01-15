import { forwardRef, Ref, ElementType } from "react";
import { classNames } from "@functions/index";
import { ButtonBase, ButtonBaseProps } from "../Button/ButtonBase";
import { BadgeProps } from "@interfaces/BadgeProps";

const Badge = <P extends ElementType = "span">(
  {
    className,
    children,
    size = "sm",
    ...props
  }: ButtonBaseProps<P> & BadgeProps,
  ref: Ref<HTMLSpanElement>
) => {
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

  return (
    <ButtonBase
      {...(props as ButtonBaseProps<any>)}
      as="span"
      ref={ref}
      className={classNames(
        `${className} ${sizeType} uppercase pointer-events-none px-2`
      )}
    >
      {children}
    </ButtonBase>
  );
};

export default forwardRef(Badge) as typeof Badge;
