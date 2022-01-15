import { cloneElement, ReactNode, ReactElement } from "react";
import { classNames, getValidChildren } from "@functions/index";
import Button from "../Button";
import IconButton from "../Button/IconButton";
import { ButtonGroupProps } from "@interfaces/ButtonGroupProps";

export function ButtonGroup({
  children,
  className,
  spacing,
  variant = "outline",
  isAttached = true,
  direction = "row",
  radius = "lg",
  colorScheme = "blue",
  isFullWidth = true,
  size = "sm",
}: ButtonGroupProps) {
  const radiusType =
    radius === "sm" && direction === "row" && isAttached
      ? "first:rounded-l-sm last:rounded-r-sm rounded-none"
      : radius === "md" && direction === "row" && isAttached
      ? "first:rounded-l-md last:rounded-r-md rounded-none"
      : radius === "lg" && direction === "row" && isAttached
      ? "first:rounded-l-lg last:rounded-r-lg rounded-none"
      : radius === "xl" && direction === "row" && isAttached
      ? "first:rounded-l-xl last:rounded-r-xl rounded-none"
      : radius === "full" && direction === "row" && isAttached
      ? "first:rounded-l-full last:rounded-r-full rounded-none"
      : radius === "none" && direction === "row" && isAttached
      ? "rounded-none"
      : null;

  const spacingType =
    spacing === "sm" && direction === "row"
      ? "space-x-0.5"
      : spacing === "md" && direction === "row"
      ? "space-x-1"
      : spacing === "lg" && direction === "row"
      ? "space-x-2"
      : spacing === "xl" && direction === "row"
      ? "space-x-3"
      : spacing === "sm" && direction === "column"
      ? "space-y-0.5"
      : spacing === "md" && direction === "column"
      ? "space-y-1"
      : spacing === "lg" && direction === "column"
      ? "space-y-2"
      : spacing === "xl" && direction === "column"
      ? "space-y-3"
      : null;

  const directionType =
    direction === "row"
      ? "flex-row"
      : direction === "column"
      ? "flex-col"
      : null;

  const isAttachedType =
    isAttached && direction === "row"
      ? "-ml-px"
      : isAttached && direction === "column"
      ? "-mb-px"
      : null;

  const isFullWidthType = isFullWidth
    ? "w-full"
    : !isFullWidth
    ? "w-[min-content]"
    : null;

  const renderChildren = getValidChildren(children, (item: ReactNode) =>
    Boolean(
      (item &&
        (item as ReactElement).type &&
        (item as ReactElement).type === Button) ||
        (item as ReactElement).type === IconButton
    )
  ) as ReactElement[];

  return (
    <div
      role="group"
      className={classNames(
        `${directionType} ${isFullWidthType} ${spacingType} relative flex`
      )}
    >
      {renderChildren.map((child: ReactElement, idx: number) => {
        return cloneElement(child, {
          className: classNames(`${className} ${radiusType} ${isAttachedType}`),
          variant,
          isFullWidth,
          radius,
          colorScheme,
          size,
          key: idx,
        });
      })}
    </div>
  );
}
