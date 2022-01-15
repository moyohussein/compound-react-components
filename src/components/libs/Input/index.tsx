import {
  forwardRef,
  useState,
  createRef,
  ReactNode,
  Ref,
  ChangeEvent,
  MouseEvent,
  ElementType,
} from "react";
import { IoCloseOutline } from "react-icons/io5";
import { classNames } from "@functions/index";
import useForkRef from "@hooks/useForkRef";
import Badge from "../Badge";
import Button from "../Button";
import { Colors, Radius } from "@definitions/index";
import IconButton from "../Button/IconButton";
import { InputBase, InputBaseProps } from "../Input/InputBase";
import { InputProps } from "@interfaces/InputProps";

function InputField<P extends ElementType = "input">(
  {
    className,
    isReadOnly = false,
    fontWeight = "normal",
    focusShadow = "md",
    isFullWidth = false,
    isInvalid,
    isRequired,
    placeholder = " ",
    size = "md",
    onChange,
    onClearClick,
    clearable = false,
    initialValue = "",
    id,
    isDisabled = false,
    ...props
  }: InputProps & InputBaseProps<P>,
  ref: Ref<HTMLInputElement>
) {
  const [val, setVal] = useState<string | undefined | number>(initialValue);

  const inputRef = createRef<HTMLInputElement>();

  const InputRef = useForkRef([inputRef, ref]);

  const simulateChangeEvent = (
    el: HTMLInputElement,
    event: MouseEvent
  ): ChangeEvent<HTMLInputElement> => {
    return {
      ...event,
      target: el,
      currentTarget: el,
    };
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled || isReadOnly) return;
    setVal(event.target.value);
    onChange && onChange(event);
  };

  const clearHandler = (event: MouseEvent | any) => {
    setVal("");
    onClearClick && onClearClick(event);
    if (!inputRef.current) return;
    const changeEvent = simulateChangeEvent(inputRef.current, event);
    changeEvent.target.value = "";
    onChange && onChange(changeEvent);
    inputRef.current.focus();
  };

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
      ? "input-xs"
      : size === "sm"
      ? "input-sm"
      : size === "md"
      ? "input-md"
      : size === "lg"
      ? "input-lg"
      : size === "xl"
      ? "input-xl"
      : null;

  const focusShadowType =
    focusShadow === "sm"
      ? "focus:drop-shadow"
      : focusShadow === "md"
      ? "focus:drop-shadow-sm"
      : focusShadow === "lg"
      ? "focus:drop-shadow-md"
      : focusShadow === "xl"
      ? "focus:drop-shadow-lg"
      : focusShadow === "2xl"
      ? "focus:drop-shadow-xl"
      : focusShadow === "none"
      ? "focus:drop-shadow-none"
      : null;

  const clearableIconSizeType =
    size === "xs"
      ? 18
      : size === "sm"
      ? 22
      : size === "md"
      ? 25
      : size === "lg"
      ? 28
      : size === "xl"
      ? 30
      : 25;

  const clearableType =
    clearable && size === "xs"
      ? "pr-[24px]"
      : clearable && size === "sm"
      ? "pr-[28px]"
      : clearable && size === "md"
      ? "pr-[31px]"
      : clearable && size === "lg"
      ? "pr-[34px]"
      : clearable && size === "xl"
      ? "pr-[36px]"
      : null;

  const isFullWidthType = isFullWidth ? "w-full" : "w-auto";

  return (
    <div className="relative h-[max-content] inline-flex item-center">
      <InputBase
        {...(props as InputBaseProps<any>)}
        as="input"
        id={id}
        value={val}
        readOnly={isReadOnly}
        required={isRequired}
        aria-invalid={isInvalid}
        aria-required={isRequired}
        onChange={changeHandler}
        placeholder={placeholder}
        ref={InputRef}
        disabled={isDisabled || isReadOnly}
        className={classNames(
          `${className} ${sizeType} ${focusShadowType} ${fontWeightType} ${isFullWidthType} ${clearableType} hover:z-[1] peer`
        )}
      />
      {clearable ? (
        <IconButton
          className="absolute focus:ring-0 inset-y-0 right-0 my-auto z-10 mr-[5px] peer-placeholder-shown:hidden animate-flow-in h-[min-content] w-[min-content]"
          icon={<IoCloseOutline size={clearableIconSizeType} />}
          colorScheme="red"
          title="clear"
          size="xs"
          variant="text"
          ariaLabel="clear text field"
          onClick={clearHandler}
        />
      ) : null}
    </div>
  );
}

const Input = forwardRef(InputField) as typeof InputField;

interface InputRightAdornmentProps {
  className?: string;
  children?: ReactNode;
}

function InputRightAdornment<P extends ElementType = "div">(
  {
    className,
    children,
    ...props
  }: InputRightAdornmentProps & InputBaseProps<P>,
  ref: Ref<HTMLDivElement>
) {
  return (
    <InputBase
      as="div"
      ref={ref}
      {...(props as InputBaseProps<any>)}
      className={classNames(
        `${className} pointer-events-none text-opacity-30 order-last`
      )}
    >
      {children}
    </InputBase>
  );
}
const InputRightAddOn = forwardRef(
  InputRightAdornment
) as typeof InputRightAdornment;

interface InputLeftAdornmentProps {
  className?: string;
  children?: ReactNode;
}

function InputLeftAdornment<P extends ElementType = "div">(
  {
    className,
    children,
    ...props
  }: InputLeftAdornmentProps & InputBaseProps<P>,
  ref: Ref<HTMLDivElement>
) {
  return (
    <InputBase
      as="div"
      ref={ref}
      {...(props as InputBaseProps<any>)}
      className={classNames(
        `${className} pointer-events-none text-opacity-30 order-first`
      )}
    >
      {children}
    </InputBase>
  );
}
const InputLeftAddOn = forwardRef(
  InputLeftAdornment
) as typeof InputLeftAdornment;

type InputLeftElementProps = {
  children: ReactNode;
  className?: string;
  colorScheme?: Colors;
};

function InputLeftElement({
  children,
  className,
  colorScheme,
}: InputLeftElementProps) {
  return (
    <Badge
      colorScheme={colorScheme}
      variant="text"
      radius="none"
      className={classNames(
        `${className} absolute left-0 text-opacity-30 order-first`
      )}
    >
      {children}
    </Badge>
  );
}

type InputRightElementProps = {
  children: ReactNode;
  className?: string;
  colorScheme?: Colors;
};

function InputRightElement({
  children,
  className,
  colorScheme,
}: InputRightElementProps) {
  return (
    <Badge
      colorScheme={colorScheme}
      variant="text"
      radius="none"
      className={classNames(
        `${className} absolute right-0 peer text-opacity-30 order-first `
      )}
    >
      {children}
    </Badge>
  );
}

type InputRightButtonProps = {
  children: ReactNode;
  className?: string;
  radius?: Radius;
  colorScheme?: Colors;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

function InputRightButton({
  children,
  className,
  colorScheme,
  radius,
  onClick,
}: InputRightButtonProps) {
  return (
    <Button
      colorScheme={colorScheme}
      variant="solid"
      radius={radius}
      onClick={onClick}
      className={classNames(`${className} order-last`)}
    >
      {children}
    </Button>
  );
}

type InputLeftButtonProps = {
  children: ReactNode;
  className?: string;
  radius?: Radius;
  colorScheme?: Colors;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

function InputLeftButton({
  children,
  className,
  colorScheme,
  radius,
  onClick,
}: InputLeftButtonProps) {
  return (
    <Button
      colorScheme={colorScheme}
      variant="solid"
      radius={radius}
      onClick={onClick}
      className={classNames(`${className} order-first`)}
    >
      {children}
    </Button>
  );
}

export {
  Input,
  InputRightAddOn,
  InputLeftAddOn,
  InputLeftElement,
  InputRightElement,
  InputLeftButton,
  InputRightButton,
};
