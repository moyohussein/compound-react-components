import {
  ElementType,
  ReactNode,
  ComponentPropsWithRef,
  forwardRef,
  Ref,
} from "react";
import { classNames } from "@functions/index";
import { Colors, Radius, Variants } from "@definitions/index";

/**
 * Utility type
 */

type MergeElementProps<T extends ElementType, P extends object = {}> = Omit<
  ComponentPropsWithRef<T>,
  keyof P
> &
  P;

interface CustomButtonBaseProps {
  className?: string;
  children?: ReactNode;
}

interface ColorProps extends CustomButtonBaseProps {
  colorScheme?: Colors;
}

interface VariantProps extends CustomButtonBaseProps {
  variant?: Variants;
}

interface RadiusProps extends CustomButtonBaseProps {
  radius?: Radius;
}

export type ButtonBaseProps<P extends ElementType = "button"> = {
  as?: P;
} & MergeElementProps<P, ColorProps | RadiusProps | VariantProps>;

/**
 * Component
 */

export function CustomButton<T extends ElementType = "button">(
  {
    as,
    className,
    children,
    colorScheme = "amber",
    radius = "md",
    variant = "outline",
    ...rest
  }: ButtonBaseProps<T>,
  ref: Ref<HTMLButtonElement>
) {
  const Component = as || "button";

  const radiusType =
    radius === "sm"
      ? "rounded-sm"
      : radius === "md"
      ? "rounded-md"
      : radius === "lg"
      ? "rounded-lg"
      : radius === "xl"
      ? "rounded-xl"
      : radius === "full"
      ? "rounded-full"
      : radius === "none"
      ? "rounded-none"
      : null;

  const colorSchemeType =
    colorScheme === "amber"
      ? "bg-amber-500 border-amber-500 focus:ring-amber-500 text-amber-500 hover:bg-amber-600"
      : colorScheme === "blue"
      ? "bg-blue-500 border-blue-500 focus:ring-blue-500 text-blue-500 hover:bg-blue-600"
      : colorScheme === "black"
      ? "bg-black border-black focus:ring-black text-black hover:bg-gray-700"
      : colorScheme === "blueGray"
      ? "bg-blueGray-500 border-blueGray-500 focus:ring-blueGray-500 text-blueGray-500 hover:bg-blueGray-600"
      : colorScheme === "coolGray"
      ? "bg-coolGray-500 border-coolGray-500 focus:ring-coolGray-500 text-coolGray-500 hover:bg-coolGray-600"
      : colorScheme === "cyan"
      ? "bg-cyan-500 border-cyan-500 focus:ring-cyan-500 text-cyan-500 hover:bg-cyan-600"
      : colorScheme === "emerald"
      ? "bg-emerald-500 border-emerald-500 focus:ring-emerald-500 text-emerald-500 hover:bg-emerald-600"
      : colorScheme === "fuchsia"
      ? "bg-fuchsia-500 border-fuchsia-500 focus:ring-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-600"
      : colorScheme === "gray"
      ? "bg-gray-500 border-gray-500 focus:ring-gray-500 text-gray-500 hover:bg-gray-600"
      : colorScheme === "green"
      ? "bg-green-500 border-green-500 focus:ring-green-500 text-green-500 hover:bg-green-600"
      : colorScheme === "indigo"
      ? "bg-indigo-500 border-indigo-500  focus:ring-indigo-500 text-indigo-500 hover:bg-indigo-600"
      : colorScheme === "lime"
      ? "bg-lime-500 border-lime-500 focus:ring-lime-500 text-lime-500 hover:bg-lime-600"
      : colorScheme === "orange"
      ? "bg-orange-500 border-orange-500 focus:ring-orange-500 text-orange-500 hover:bg-orange-600"
      : colorScheme === "pink"
      ? "bg-pink-500 border-pink-500 focus:ring-pink-500 text-pink-500 hover:bg-pink-600"
      : colorScheme === "purple"
      ? "bg-purple-500 border-purple-500 focus:ring-purple-500 text-purple-500 hover:bg-purple-600"
      : colorScheme === "red"
      ? "bg-red-500 border-red-500 focus:ring-red-500 text-red-500 hover:bg-red-600"
      : colorScheme === "rose"
      ? "bg-rose-500 border-rose-500 focus:ring-rose-500 text-rose-500 hover:bg-rose-600"
      : colorScheme === "sky"
      ? "bg-sky-500 border-sky-500 focus:ring-sky-500 text-sky-500 hover:bg-sky-600"
      : colorScheme === "teal"
      ? "bg-teal-500 border-teal-500 focus:ring-teal-500 text-teal-500 hover:bg-teal-600"
      : colorScheme === "violet"
      ? "bg-violet-500 border-violet-500 focus:ring-violet-500 text-violet-500 hover:bg-violet-600"
      : colorScheme === "warmGray"
      ? "bg-warmGray-500 border-warmGray-500 focus:ring-warmGray-500 text-warmGray-500 hover:bg-warmGray-600"
      : colorScheme === "white"
      ? "bg-white border-white focus:ring-white text-white hover:bg-gray-200"
      : colorScheme === "yellow"
      ? "bg-yellow-500 border-yellow-500 focus:ring-yellow-500 text-yellow-500 hover:bg-yellow-600"
      : colorScheme === "danger"
      ? "bg-danger-500 border-danger-500 focus:ring-danger-500 text-danger-500 hover:bg-danger-600"
      : colorScheme === "primary"
      ? "bg-primary-500 border-primary-500 focus:ring-primary-500 text-primary-500 hover:bg-primary-600"
      : null;

  const variantType =
    variant === "ghost"
      ? "bg-opacity-[0.15] hover:bg-opacity-[0.25] "
      : variant === "outline"
      ? "bg-opacity-0 border hover:bg-opacity-10"
      : variant === "solid" && colorScheme !== "white"
      ? "!text-white"
      : variant === "solid" && colorScheme === "white"
      ? "!text-black"
      : variant === "text"
      ? "!bg-transparent hover:bg-opacity-[0.15]"
      : variant === "link"
      ? "!bg-transparent hover:!bg-transparent hover:underline !justify-start p-0"
      : null;

  return (
    <Component
      ref={ref}
      {...rest}
      className={classNames(
        `${className} ${radiusType} ${variantType} ${colorSchemeType} base focus:ring-2 focus:ring-opacity-50`
      )}
    >
      {children}
    </Component>
  );
}

export const ButtonBase = forwardRef(CustomButton) as typeof CustomButton;
