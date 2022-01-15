import { classNames } from "@functions/index";
import { DividerProps } from "@interfaces/DividerProps";

export function Divider({
  className,
  orientation = "horizontal",
  dividerColor = "grey",
}: DividerProps) {
  const orientationType =
    orientation === "vertical"
      ? "h-full border-l mx-2"
      : orientation === "horizontal"
      ? "w-full border-t my-2"
      : null;

  const dividerColorType =
    dividerColor === "grey"
      ? "border-[#e6e6e6]"
      : dividerColor === "black"
      ? "border-[#000]"
      : dividerColor === "white"
      ? "border-[#000]"
      : null;

  return (
    <hr
      aria-hidden="true"
      aria-orientation={orientation}
      className={classNames(
        `${className} ${orientationType} ${dividerColorType}  `
      )}
    />
  );
}
