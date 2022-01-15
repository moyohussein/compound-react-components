import { forwardRef, Ref, ElementType } from "react";
import { classNames } from "@functions/index";
import { ButtonBase, ButtonBaseProps } from "../Button/ButtonBase";
import { ImSpinner8 } from "react-icons/im";
import { SrOnly } from "../SrOnly";
import { ButtonProps } from "@interfaces/ButtonProps";

function Button<P extends ElementType = "button">(
  {
    className,
    children,
    loadingText = "Loading...",
    groupHoverAnimation,
    animateOnHover = false,
    id,
    onClick,
    size = "md",
    isDisabled = false,
    isFullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    iconSpacing = "md",
    ariaLabel,
    ...props
  }: ButtonProps & ButtonBaseProps<P>,
  ref: Ref<HTMLButtonElement>
) {
  const sizeType =
    size === "xs"
      ? "btn-xs"
      : size === "sm"
      ? "btn-sm"
      : size === "md"
      ? "btn-md"
      : size === "lg"
      ? "btn-lg"
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

  const groupHoverAnimationType =
    groupHoverAnimation === "grow"
      ? "group-hover:animate-grow"
      : groupHoverAnimation === "roll"
      ? "group-hover:animate-roll"
      : groupHoverAnimation === "wiggle"
      ? "group-hover:animate-wiggle"
      : null;

  const iconSpacingType =
    iconSpacing === "sm" && leftIcon
      ? "mr-1"
      : iconSpacing === "md" && leftIcon
      ? "mr-1.5"
      : iconSpacing === "lg" && leftIcon
      ? "mr-2"
      : iconSpacing === "xl" && leftIcon
      ? "mr-3"
      : iconSpacing === "sm" && rightIcon
      ? "ml-1"
      : iconSpacing === "md" && rightIcon
      ? "ml-1.5"
      : iconSpacing === "lg" && rightIcon
      ? "ml-2"
      : iconSpacing === "xl" && rightIcon
      ? "mr-3"
      : null;

  const animateOnHoverType = animateOnHover ? "btn-animate" : null;

  const isFullWidthType = isFullWidth ? "w-full" : "w-[max-content]";

  return (
    <ButtonBase
      {...(props as ButtonBaseProps)}
      id={id}
      onClick={onClick}
      ref={ref}
      aria-busy={isLoading ?? false}
      disabled={isDisabled || isLoading}
      className={classNames(
        `${className} ${isFullWidthType} ${sizeType} ${animateOnHoverType} group active:transform active:scale-[0.98]`
      )}
    >
      {leftIcon && (
        <span
          aria-hidden="true"
          className={classNames(
            `${iconSpacingType} ${iconSize} ${groupHoverAnimationType}`
          )}
        >
          {leftIcon}
        </span>
      )}
      {isLoading && (
        <span
          aria-hidden="true"
          className={classNames(`${iconSize} animate-spin mr-1.5`)}
        >
          <ImSpinner8 />
        </span>
      )}
      {isLoading && loadingText ? loadingText : children}
      {rightIcon && (
        <span
          aria-hidden="true"
          className={classNames(
            `${iconSpacingType} ${iconSize} ${groupHoverAnimationType}`
          )}
        >
          {rightIcon}
        </span>
      )}
      {ariaLabel && <SrOnly>{ariaLabel}</SrOnly>}
    </ButtonBase>
  );
}

export default forwardRef(Button) as typeof Button;
