import { ReactNode, ReactElement, cloneElement, Fragment } from "react";
import { classNames, getValidChildren } from "@functions/index";
import { Base } from "../Base";
import { SrOnly } from "../SrOnly";
import {
  FormControlProps,
  FormErrorMessageProps,
  FormHelperTextProps,
  FormLabelProps,
} from "@interfaces/FormControlProps";

function FormControl({
  children,
  className,
  as,
  direction = "column",
  spacing = "none",
  isInvalid,
  isRequired,
  isDisabled,
  isReadOnly,
}: FormControlProps) {
  const context = {
    isInvalid,
    isRequired,
    isDisabled,
    isReadOnly,
  };

  const renderChildren = getValidChildren(children, (item: ReactNode) =>
    Boolean(item && (item as ReactElement).type)
  ) as ReactElement[];

  const directionType = direction === "column" ? "flex-col" : "flex-row";

  const spacingType =
    direction === "column" && spacing === "xs"
      ? "space-y-1"
      : direction === "column" && spacing === "sm"
      ? "space-y-2"
      : direction === "column" && spacing === "md"
      ? "space-y-3"
      : direction === "column" && spacing === "lg"
      ? "space-y-4"
      : direction === "column" && spacing === "xl"
      ? "space-y-5"
      : direction === "row" && spacing === "xs"
      ? "space-x-1"
      : direction === "row" && spacing === "sm"
      ? "space-x-2"
      : direction === "row" && spacing === "md"
      ? "space-x-3"
      : direction === "row" && spacing === "lg"
      ? "space-x-4"
      : direction === "row" && spacing === "xl"
      ? "space-x-5"
      : null;

  return (
    <Base
      as={as || "div"}
      role="group"
      className={classNames(
        `${className} ${spacingType} ${directionType} inline-flex w-full `
      )}
    >
      {renderChildren.map((child: ReactElement, idx: number) => {
        return cloneElement(child, {
          isInvalid,
          isRequired,
          isDisabled,
          isReadOnly,
          key: idx,
        });
      })}
    </Base>
  );
}

function FormLabel({
  className,
  as,
  label,
  htmlFor,
  isRequired,
}: FormLabelProps) {
  const isRequiredType = isRequired
    ? "after:content-['*'] after:text-rose-500"
    : null;

  return (
    <Fragment>
      <Base
        as={as || "label"}
        htmlFor={htmlFor}
        className={classNames(`${className} ${isRequiredType} capitalize`)}
      >
        {label}
      </Base>
      {isRequired ? <SrOnly>required field</SrOnly> : null}
    </Fragment>
  );
}

function FormHelperText({ className, children, id }: FormHelperTextProps) {
  return (
    <span
      id={id}
      className={classNames(`${className} font-light italic text-gray-500`)}
    >
      {children}
    </span>
  );
}

function FormErrorMessage({
  className,
  children,
  isInvalid,
  id,
}: FormErrorMessageProps) {
  const isInvalidType = isInvalid ? "visible opacity-100" : "invisible opacity-0";
  return (
    <small
      id={id}
      role="alert"
      className={classNames(
        `${className} ${isInvalidType} inline-flex font-light items-center text-rose-600 `
      )}
    >
      ❗{children}
    </small>
  );
}
export { FormControl, FormHelperText, FormErrorMessage, FormLabel };
