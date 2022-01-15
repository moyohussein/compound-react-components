import { ElementType, ComponentPropsWithRef, forwardRef, Ref } from "react";
import { classNames } from "@functions/index";
import { Colors, InputVariants, Radius } from "@definitions/index";

/**
 * Utility type
 */

type MergeElementProps<T extends ElementType, P extends object = {}> = Omit<
  ComponentPropsWithRef<T>,
  keyof P
> &
  P;

/**
 * Props
 */

interface CustomInputBaseProps {
  className?: string;
}

interface ColorProps extends CustomInputBaseProps {
  colorScheme?: Colors;
}

interface VariantProps extends CustomInputBaseProps {
  variant?: InputVariants;
}

interface RadiusProps extends CustomInputBaseProps {
  radius?: Radius;
}

interface FocusRingProps extends CustomInputBaseProps {
  focusRing?: boolean;
}

export type InputBaseProps<P extends ElementType = "input"> = {
  as?: P;
} & MergeElementProps<P, ColorProps | RadiusProps | VariantProps>;

/**
 * Component
 */

export function CustomInput<T extends ElementType = "input">(
  {
    as,
    className,
    colorScheme = "blue",
    radius = "md",
    focusRing = true,
    variant = "outline",
    ...rest
  }: InputBaseProps<T>,
  ref: Ref<HTMLInputElement>
) {
  const Component = as || "input";

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
      ? "bg-amber-200 border-amber-200 focus:border-amber-500 focus:ring-amber-500 text-amber-700 hover:border-amber-400 hover:bg-amber-300"
      : colorScheme === "blue"
      ? "bg-blue-200 border-blue-200 focus:border-blue-500 focus:ring-blue-500 text-blue-700 hover:border-blue-400 hover:bg-blue-300"
      : colorScheme === "black"
      ? "bg-gray-800 border-gray-800 focus:border-black focus:ring-black text-black hover:border-black hover:bg-black"
      : colorScheme === "blueGray"
      ? "bg-blueGray-200 border-blueGray-200 focus:border-blueGray-500 focus:ring-blueGray-500 text-blueGray-700 hover:border-blueGray-400 hover:bg-blueGray-300"
      : colorScheme === "coolGray"
      ? "bg-coolGray-200 border-coolGray-200 focus:border-coolGray-500 focus:ring-coolGray-500 text-coolGray-700 hover:border-coolGray-400 hover:bg-coolGray-300"
      : colorScheme === "cyan"
      ? "bg-cyan-200 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500 text-cyan-700 hover:border-cyan-400 hover:bg-cyan-300"
      : colorScheme === "emerald"
      ? "bg-emerald-200 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-300"
      : colorScheme === "fuchsia"
      ? "bg-fuchsia-200 border-fuchsia-200 focus:border-fuchsia-500 focus:ring-fuchsia-500 text-fuchsia-700 hover:border-fuchsia-400 hover:bg-fuchsia-300"
      : colorScheme === "gray"
      ? "bg-gray-200 border-gray-200 focus:border-gray-500 focus:ring-gray-500 text-gray-700 hover:border-gray-400 hover:bg-gray-300"
      : colorScheme === "green"
      ? "bg-green-200 border-green-200 focus:border-green-500 focus:ring-green-500 text-green-700 hover:border-green-400 hover:bg-green-300"
      : colorScheme === "indigo"
      ? "bg-indigo-200 border-indigo-500  focus:border-indigo-500 focus:ring-indigo-500 text-indigo-700 hover:border-indigo-400 hover:bg-indigo-300"
      : colorScheme === "lime"
      ? "bg-lime-200 border-lime-200 focus:border-lime-500 focus:ring-lime-500 text-lime-700 hover:border-lime-400 hover:bg-lime-300"
      : colorScheme === "orange"
      ? "bg-orange-200 border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-orange-700 hover:border-orange-400 hover:bg-orange-300"
      : colorScheme === "pink"
      ? "bg-pink-200 border-pink-200 focus:border-pink-500 focus:ring-pink-500 text-pink-700 hover:border-pink-400 hover:bg-pink-300"
      : colorScheme === "purple"
      ? "bg-purple-200 border-purple-200 focus:border-purple-500 focus:ring-purple-500 text-purple-700 hover:border-purple-400 hover:bg-purple-300"
      : colorScheme === "red"
      ? "bg-red-200 border-red-200 focus:border-red-500 focus:ring-red-500 text-red-700 hover:border-red-400 hover:bg-red-300"
      : colorScheme === "rose"
      ? "bg-rose-200 border-rose-200 focus:border-rose-500 focus:ring-rose-500 text-rose-700 hover:border-rose-400 hover:bg-rose-300"
      : colorScheme === "sky"
      ? "bg-sky-200 border-sky-200 focus:border-sky-500 focus:ring-sky-500 text-sky-700 hover:border-sky-400 hover:bg-sky-300"
      : colorScheme === "teal"
      ? "bg-teal-200 border-teal-200 focus:border-teal-500 focus:ring-teal-500 text-teal-700 hover:border-teal-400 hover:bg-teal-300"
      : colorScheme === "violet"
      ? "bg-violet-200 border-violet-200 focus:border-violet-500 focus:ring-violet-500 text-violet-700 hover:border-violet-400 hover:bg-violet-300"
      : colorScheme === "warmGray"
      ? "bg-warmGray-200 border-warmGray-200 focus:border-warmGray-500 focus:ring-warmGray-500 text-warmGray-700 hover:border-warmGray-400 hover:bg-warmGray-300"
      : colorScheme === "white"
      ? "bg-gray-100 border-gray-100 focus:border-white focus:ring-white text-white hover:border-white hover:bg-white"
      : colorScheme === "yellow"
      ? "bg-yellow-200 border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 text-yellow-700 hover:border-yellow-400 hover:bg-yellow-300"
      : null;

  const focusRingType = focusRing ? `focus:ring-2` : null;

  const variantType =
    variant === "filled"
      ? `${focusRingType} focus:ring-opacity-50`
      : variant === "outline"
      ? `${focusRingType} bg-opacity-0 border hover:bg-opacity-0 hover:border focus:border focus:ring-opacity-50`
      : variant === "standard"
      ? "bg-opacity-[0.25] border-b rounded-none hover:bg-opacity-[0.45] focus:border-b-2 focus:bg-opacity-50"
      : null;

  return (
    <Component
      ref={ref}
      {...rest}
      className={classNames(
        `${className} ${radiusType} ${colorSchemeType} ${variantType} input `
      )}
    ></Component>
  );
}

export const InputBase = forwardRef(CustomInput) as typeof CustomInput;
