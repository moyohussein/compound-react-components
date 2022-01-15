import { useContext } from "react";
import { classNames } from "@functions/index";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import {
  AlertDescriptionProps,
  AlertIconProps,
  AlertProps,
  AlertTitleProps,
} from "@interfaces/AlertProps";
import { AlertCtx } from "@contexts/index";

function Alert({
  className,
  children,
  direction = "row",
  size = "md",
  status = "success",
  variant = "solid",
}: AlertProps) {
  const context = { status, size, variant };

  const directionType =
    direction === "column"
      ? "flex-col space-y-3 py-6"
      : "flex-row space-x-3 py-3";

  const variantType =
    variant === "subtle"
      ? "bg-opacity-30"
      : variant === "left-accent"
      ? "bg-opacity-30 border-l-4"
      : variant === "top-accent"
      ? "bg-opacity-30 border-t-4"
      : variant === "solid"
      ? null
      : null;

  const statusType =
    status === "success"
      ? "bg-green-500 border-green-500"
      : status === "error"
      ? "bg-red-500 border-red-500"
      : status === "warning"
      ? "bg-amber-500 border-amber-500"
      : status === "info"
      ? "bg-blue-500 border-blue-500"
      : null;

  return (
    <AlertCtx.Provider value={context}>
      <div
        role="status"
        aria-live="polite"
        className={classNames(
          `${className} ${statusType} ${variantType} ${directionType} flex items-center px-4`
        )}
      >
        {children}
      </div>
    </AlertCtx.Provider>
  );
}

function AlertIcon({ className, icon }: AlertIconProps) {
  const { status, size, variant } = useContext(AlertCtx);

  const statusType =
    status === "success" && variant !== "solid"
      ? "text-green-500"
      : status === "error" && variant !== "solid"
      ? "text-red-500"
      : status === "warning" && variant !== "solid"
      ? "text-yellow-500"
      : status === "info" && variant !== "solid"
      ? "text-blue-500"
      : "text-white";

  const sizeType =
    size === "sm"
      ? "text-[20px]"
      : size === "md"
      ? "text-[25px]"
      : size === "lg"
      ? "text-[30px]"
      : size === "xl"
      ? "text-[35px]"
      : "";

  const classes = `${statusType} ${sizeType}`;

  const iconType =
    status === "success" ? (
      <FaCheckCircle className={classNames(`${classes}`)} />
    ) : status === "error" ? (
      <MdError className={classNames(`${classes}`)} />
    ) : status === "warning" ? (
      <IoWarning className={classNames(`${classes}`)} />
    ) : status === "info" ? (
      <IoInformationCircle className={classNames(`${classes}`)} />
    ) : null;

  return (
    <span className={classNames(`${className} ${sizeType} rounded-full`)}>
      {icon || iconType}
    </span>
  );
}

function AlertTitle({ className, title }: AlertTitleProps) {
  const { variant, size } = useContext(AlertCtx);

  const variantType = variant === "solid" ? "text-white" : "text-black";

  const sizeType =
    size === "sm"
      ? "text-[12px]"
      : size === "md"
      ? "text-[14px]"
      : size === "lg"
      ? "text-[16px]"
      : size === "xl"
      ? "text-[18px]"
      : null;

  return (
    <div
      className={classNames(
        `${className} ${sizeType} ${variantType} font-bold `
      )}
    >
      {title}
    </div>
  );
}

function AlertDescription({ className, description }: AlertDescriptionProps) {
  const { variant, size } = useContext(AlertCtx);

  const variantType = variant === "solid" ? "text-white" : "text-black";

  const sizeType =
    size === "sm"
      ? "text-[12px]"
      : size === "md"
      ? "text-[14px]"
      : size === "lg"
      ? "text-[16px]"
      : size === "xl"
      ? "text-[18px]"
      : null;

  return (
    <div className={classNames(`${className} ${sizeType} ${variantType}`)}>
      {description}
    </div>
  );
}

export { Alert, AlertIcon, AlertTitle, AlertDescription };
