import React, { ReactElement, ReactNode, cloneElement } from "react";
import { classNames, getValidChildren } from "@functions/index";
import {
  InputRightElement,
  InputLeftElement,
  InputRightAddOn,
  InputLeftAddOn,
  Input,
} from "../Input";
import { InputGroupProps } from "@interfaces/InputProps";

export function InputGroup({
  children,
  focusRing = true,
  focusShadow = "2xl",
  className,
  isFullWidth = false,
  colorScheme = "gray",
  opacityOnHover = true,
  radius = "md",
  size = "md",
  variant = "standard",
}: InputGroupProps) {
  // let renderChildren = getValidChildren(children, (item: ReactNode) =>
  // Boolean (item && (item as ReactElement).type &&
  //     (item as ReactElement).type === Input ||
  //     (item as ReactElement).type === InputRightElement ||
  //     (item as ReactElement).type === InputLeftElement ||
  //     (item as ReactElement).type === InputAddOn
  // )) as ReactElement[];

  let renderChildren = getValidChildren(children, (item: ReactNode) =>
    Boolean(item && (item as ReactElement).type)
  ) as ReactElement[];

  // const labelIsPresent = (item: ReactElement) => (item as ReactElement).type &&
  // (item as ReactElement).type === label;
  const radiusType =
    radius === "sm" && variant !== "standard"
      ? "first:rounded-l-sm last:rounded-r-sm rounded-none"
      : radius === "md" && variant !== "standard"
      ? "first:rounded-l-md last:rounded-r-md rounded-none"
      : radius === "lg" && variant !== "standard"
      ? "first:rounded-l-lg last:rounded-r-lg rounded-none"
      : radius === "xl" && variant !== "standard"
      ? "first:rounded-l-xl last:rounded-r-xl rounded-none"
      : radius === "full" && variant !== "standard"
      ? "first:rounded-l-full last:rounded-r-full rounded-none"
      : radius === "none"
      ? "rounded-none"
      : null;

  const radiusInputType =
    radius === "sm" && variant !== "standard"
      ? "rounded-sm"
      : radius === "md" && variant !== "standard"
      ? "rounded-md"
      : radius === "lg" && variant !== "standard"
      ? "rounded-lg"
      : radius === "xl" && variant !== "standard"
      ? "rounded-xl"
      : radius === "full" && variant !== "standard"
      ? "rounded-full"
      : radius === "none"
      ? "rounded-none"
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

  const bgOpacityOnHoverType = opacityOnHover
    ? `bg-opacity-50 group-hover:bg-opacity-100`
    : null;

  const borderOpacityOnHoverType = opacityOnHover
    ? `group-hover:border-gray-800`
    : null;

  const standardOpacityOnHoverType = opacityOnHover
    ? `hover:border-b-gray-800 focus-within:hover:border-b-blue-500`
    : null;

  // const variantType = variant === "filled" ?
  //     `bg-[#e6e6ff] ${bgOpacityOnHoverType} ${radiusType}` :
  // variant === "outline" ?
  //     `border border-gray-400 border-solid ${borderOpacityOnHoverType} ${radiusType}` :
  // variant === "standard" ?
  //     `bg-[#e6e6ff] ${bgOpacityOnHoverType} border-0 rounded-none` : null;

  const focusRingWithinType =
    (focusRing && variant === "filled") || (focusRing && variant === "outline")
      ? "focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-blue-500"
      : variant === "standard"
      ? `focus-within:border-b-blue-500 focus-within:border-b border-b border-b-gray-400 ${standardOpacityOnHoverType}`
      : null;

  const standardType =
    variant === "standard"
      ? "border-b-0 focus:border-b-0 hover:border-b-0"
      : null;

  const standardFilledType =
    variant === "filled" || variant === "standard"
      ? `divide-x divide-gray-300`
      : null;

  const isFullWidthType = isFullWidth ? "w-full" : "w-[min-content]";

  const focusShadowType =
    focusShadow === "sm"
      ? "focus-within:shadow-sm"
      : focusShadow === "md"
      ? "focus-within:shadow-md"
      : focusShadow === "lg"
      ? "focus-within:shadow-lg"
      : focusShadow === "xl"
      ? "focus-within:shadow-xl"
      : focusShadow === "2xl"
      ? "focus-within:shadow-2xl"
      : focusShadow === "none"
      ? "focus-within:shadow-none"
      : null;

  const focusWithinVariantType =
    variant !== "standard"
      ? "focus-within:ring focus-within:ring-opacity-50"
      : null;

  const groupFocusWithinVariantType =
    variant === "standard" ? "group-focus-within:border-b-2" : null;

  const colorSchemeType =
    colorScheme === "amber"
      ? "focus-within:ring-amber-500"
      : colorScheme === "blue"
      ? "focus-within:ring-blue-500"
      : colorScheme === "black"
      ? "focus-within:ring-black"
      : colorScheme === "blueGray"
      ? "focus-within:ring-blueGray-500"
      : colorScheme === "coolGray"
      ? "focus-within:ring-coolGray-500"
      : colorScheme === "cyan"
      ? "focus-within:ring-cyan-500"
      : colorScheme === "emerald"
      ? "focus-within:ring-emerald-500"
      : colorScheme === "fuchsia"
      ? "focus-within:ring-fuchsia-500"
      : colorScheme === "gray"
      ? "focus-within:ring-gray-500"
      : colorScheme === "green"
      ? "focus-within:ring-green-500"
      : colorScheme === "indigo"
      ? "focus-within:ring-indigo-500"
      : colorScheme === "lime"
      ? "focus-within:ring-lime-500"
      : colorScheme === "orange"
      ? "focus-within:ring-orange-500"
      : colorScheme === "pink"
      ? "focus-within:ring-pink-500"
      : colorScheme === "purple"
      ? "focus-within:ring-purple-500"
      : colorScheme === "red"
      ? "focus-within:ring-red-500"
      : colorScheme === "rose"
      ? "focus-within:ring-rose-500"
      : colorScheme === "sky"
      ? "focus-within:ring-sky-500"
      : colorScheme === "teal"
      ? "focus-within:ring-teal-500"
      : colorScheme === "violet"
      ? "focus-within:ring-violet-500"
      : colorScheme === "warmGray"
      ? "focus-within:ring-warmGray-500"
      : colorScheme === "white"
      ? "focus-within:ring-white"
      : colorScheme === "yellow"
      ? "focus-within:ring-yellow-500"
      : null;

  const focusWithinColorType =
    colorScheme === "amber"
      ? "group-focus-within:text-amber-500 group-focus-within:border-amber-500"
      : colorScheme === "blue"
      ? "group-focus-within:text-blue-500 group-focus-within:border-blue-500"
      : colorScheme === "black"
      ? "group-focus-within:text-black group-focus-within:border-black"
      : colorScheme === "blueGray"
      ? "group-focus-within:text-blueGray-500 group-focus-within:border-blueGray-500 "
      : colorScheme === "coolGray"
      ? "group-focus-within:text-coolGray-500 group-focus-within:border-coolGray-500"
      : colorScheme === "cyan"
      ? "group-focus-within:text-cyan-500 group-focus-within:border-cyan-500"
      : colorScheme === "emerald"
      ? "group-focus-within:text-emerald-500 group-focus-within:border-emerald-500"
      : colorScheme === "fuchsia"
      ? "group-focus-within:text-fuchsia-500 group-focus-within:border-fuchsia-500"
      : colorScheme === "gray"
      ? "group-focus-within:text-gray-500 group-focus-within:border-gray-500"
      : colorScheme === "green"
      ? "group-focus-within:text-green-500 group-focus-within:border-green-500"
      : colorScheme === "indigo"
      ? "group-focus-within:text-indigo-500 group-focus-within:border-indigo-500"
      : colorScheme === "lime"
      ? "group-focus-within:text-lime-500 group-focus-within:border-lime-500"
      : colorScheme === "orange"
      ? "group-focus-within:text-orange-500 group-focus-within:border-orange-500"
      : colorScheme === "pink"
      ? "group-focus-within:text-pink-500 group-focus-within:border-pink-500"
      : colorScheme === "purple"
      ? "group-focus-within:text-purple-500 group-focus-within:border-purple-500"
      : colorScheme === "red"
      ? "group-focus-within:text-red-500 group-focus-within:border-red-500"
      : colorScheme === "rose"
      ? "group-focus-within:text-rose-500 group-focus-within:border-rose-500"
      : colorScheme === "sky"
      ? "group-focus-within:text-sky-500 group-focus-within:border-sky-500"
      : colorScheme === "teal"
      ? "group-focus-within:text-teal-500 group-focus-within:border-teal-500"
      : colorScheme === "violet"
      ? "group-focus-within:text-violet-500 group-focus-within:border-violet-500"
      : colorScheme === "warmGray"
      ? "group-focus-within:text-warmGray-500 group-focus-within:border-warmGray-500"
      : colorScheme === "white"
      ? "group-focus-within:text-white group-focus-within:border-white"
      : colorScheme === "yellow"
      ? "group-focus-within:text-yellow-500 group-focus-within:border-yellow-500"
      : null;

  return (
    <div
      className={classNames(
        `${className} relative flex items-center group h-[max-content] w-[max-content] ${colorSchemeType} ${radiusInputType} ${focusWithinVariantType} ${isFullWidthType} `
      )}
    >
      {renderChildren.map((child: ReactElement, idx: number) => {
        // if ((child as ReactElement).type === InputRightAddOn ||
        // (child as ReactElement).type === InputLeftAddOn ){
        //     return (
        //         cloneElement(child, {
        //         className: classNames(`${className} ${variantType} ${sizeType} inline-flex items-center -ml-px`),
        //         key: idx
        //     }))
        // } else if ((child as ReactElement).type === Input){
        //     return (
        //         cloneElement(child, {
        //         className: classNames(`${className} ${standardType} ${radiusType} inline-flex items-center -ml-px`),
        //         variant,
        //         isFullWidth,
        //         focusRing: false,
        //         focusShadow: "none",
        //         size,
        //         key: idx
        //     }))
        // } else if ((child as ReactElement).type === InputLeftElement ||
        //     (child as ReactElement).type === InputRightElement){
        //     return cloneElement(child, {
        //         className: classNames(`${className} ${sizeType}`),
        //     })
        // }
        // ${variantType} ${sizeType}
        return cloneElement(child, {
          className: classNames(
            `${className} ${groupFocusWithinVariantType} ${radiusType} ${sizeType} ${focusWithinColorType} inline-flex items-center -ml-px`
          ),
          variant,
          focusRing: false,
          colorScheme,
          size,
          radius,
          key: idx,
        });
      })}
    </div>
  );
}
