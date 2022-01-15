import { forwardRef, Ref, ElementType } from "react";
import { classNames } from "@functions/index";
import { InputBase, InputBaseProps } from "../Input/InputBase";
import { TextAreaProps } from "@interfaces/TextAreaProps";

function TextArea<P extends ElementType = "textarea">(
  {
    className,
    readOnly = false,
    fontWeight = "extralight",
    isFullWidth = false,
    size = "md",
    resize = "both",
    onChange,
    id,
    disabled = false,
    ...props
  }: TextAreaProps & InputBaseProps<P>,
  ref: Ref<HTMLTextAreaElement>
) {
  const fontWeightType =
    fontWeight === "extralight"
      ? "font-extralight"
      : fontWeight === "light"
      ? "font-light"
      : fontWeight === "normal"
      ? "font-normal"
      : fontWeight === "medium"
      ? "font-medium"
      : fontWeight === "bold"
      ? "font-bold"
      : fontWeight === "extrabold"
      ? "font-extrabold"
      : null;

  const sizeType =
    size === "xs"
      ? "text-xs"
      : size === "sm"
      ? "text-sm"
      : size === "md"
      ? "text-base"
      : size === "lg"
      ? "text-lg"
      : size === "xl"
      ? "text-xl"
      : null;

  const resizeType =
    resize === "vertical"
      ? "resize-y"
      : resize === "horizontal"
      ? "resize-x"
      : resize === "both"
      ? "resize"
      : resize === "none"
      ? "resize-none"
      : null;

  const isFullWidthType = isFullWidth ? "w-full" : "w-auto";

  return (
    <InputBase
      {...(props as InputBaseProps<any>)}
      id={id}
      as="textarea"
      readOnly={readOnly}
      onChange={onChange}
      ref={ref}
      disabled={disabled || readOnly}
      className={classNames(
        `${className} ${sizeType} ${resizeType} ${fontWeightType} ${isFullWidthType} py-2 leading-relaxed outline-none min-h-[75px]`
      )}
    />
  );
}

export default forwardRef(TextArea) as typeof TextArea;
