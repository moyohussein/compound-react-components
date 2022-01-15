import {
  cloneElement,
  ReactNode,
  ReactElement,
  ChangeEvent,
  useState,
} from "react";
import { classNames, getValidChildren } from "@functions/index";
import { RadioGroupProps } from "@interfaces/RadioProps";
import { Radio } from "../Radio";

export function RadioGroup({
  children,
  name,
  defaultValue = "",
  className,
  spacing = "md",
  direction = "row",
  onChange,
  radioSize = "md",
}: RadioGroupProps) {
  const [val, setVal] = useState<object>({});
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setVal({
      ...val,
      [event.target.value]: event.target.checked,
    });
    // onChange && onChange(event);
  };

  console.log(Object.values(val)[0])
  const spacingType =
    spacing === "sm" && direction === "row"
      ? "space-x-1"
      : spacing === "md" && direction === "row"
      ? "space-x-2"
      : spacing === "lg" && direction === "row"
      ? "space-x-3"
      : spacing === "xl" && direction === "row"
      ? "space-x-4"
      : spacing === "sm" && direction === "column"
      ? "space-y-1"
      : spacing === "md" && direction === "column"
      ? "space-y-2"
      : spacing === "lg" && direction === "column"
      ? "space-y-3"
      : spacing === "xl" && direction === "column"
      ? "space-y-4"
      : null;

  const directionType =
    direction === "row"
      ? "flex-row"
      : direction === "column"
      ? "flex-col"
      : null;

  const renderChildren = getValidChildren(children, (item: ReactNode) =>
    Boolean(
      item &&
        (item as ReactElement).type &&
        (item as ReactElement).type === Radio
    )
  ) as ReactElement[];

  return (
    <div
      role="radiogroup"
      className={classNames(
        `${directionType} ${spacingType} relative inline-flex h-[max-content] m-2`
      )}
    >
      {renderChildren.map((child: ReactElement, idx: number) => {
        return cloneElement(child, {
          className: classNames(`${className}`),
          name: name || `radioItem`,
          radioSize,
          key: idx,
          checked: Object.values(val)[0],
          onChange: changeHandler,
          id: `radioItem${idx}`,
        });
      })}
    </div>
  );
}
