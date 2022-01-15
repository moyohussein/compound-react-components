import { forwardRef, Ref, ElementType } from "react";
import { classNames } from "@functions/index";
import { ButtonBase, ButtonBaseProps } from "../Button/ButtonBase";
import { ImSpinner8 } from "react-icons/im";
import { SrOnly } from "../SrOnly";
import { IconButtonProps } from "@interfaces/IconButtonProps";

function IconButton<P extends ElementType = "button">(
  {
    className,
    size = "md",
    hoverAnimation,
    isFullWidth = false,
    isLoading = false,
    id,
    onClick,
    icon,
    ariaLabel,
    disabled,
    ...props
  }: IconButtonProps & ButtonBaseProps<P>,
  ref: Ref<HTMLButtonElement>
) {
  const sizeType =
    size === "xs"
      ? "h-[24px] min-w-[24px]"
      : size === "sm"
      ? "h-[32px] min-w-[32px]"
      : size === "md"
      ? "h-[40px] min-w-[40px]"
      : size === "lg"
      ? "h-[48px] min-w-[48px]"
      : null;

  const iconSize =
    size === "xs"
      ? "text-[12px]"
      : size === "sm"
      ? "text-[14px]"
      : size === "md"
      ? "text-[16px]"
      : size === "lg"
      ? "text-[18px]"
      : null;

  const isFullWidthType = isFullWidth ? "w-full" : "w-auto";

  const hoverAnimationType =
    hoverAnimation === "grow"
      ? "hover:animate-grow"
      : hoverAnimation === "roll"
      ? "hover:animate-roll"
      : hoverAnimation === "wiggle"
      ? "hover:animate-wiggle"
      : null;

  return (
    <ButtonBase
      {...(props as ButtonBaseProps)}
      ref={ref}
      id={id}
      onClick={onClick}
      aria-busy={isLoading ?? false}
      disabled={disabled || isLoading}
      className={classNames(
        `${className} ${sizeType} ${isFullWidthType} active:transform active:scale-[0.98]`
      )}
    >
      {hoverAnimation ? (
        <span
          aria-hidden="true"
          className={classNames(`${hoverAnimationType} ${iconSize}`)}
        >
          {icon}
        </span>
      ) : isLoading ? (
        <span
          aria-hidden="true"
          className={classNames(`${iconSize} animate-spin`)}
        >
          {" "}
          <ImSpinner8 />{" "}
        </span>
      ) : (
        icon
      )}
      <SrOnly>{ariaLabel}</SrOnly>
    </ButtonBase>
  );
}

export default forwardRef(IconButton) as typeof IconButton;
