import { ReactNode, Children, isValidElement } from "react";
import { Colors, ColorValues, ColorType, Radius, RGB, DefaultSizes, R5to10, Direction, SpacingScale, widthType, R10to100 } from "@definitions/index"

export function hexToRgb(hex: string | any) {
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		let c = hex.substring(1).split("");
		c.length === 3 ? (c = [c[0], c[0], c[1], c[1], c[2], c[2]]) : null;
		c = "0x" + c.join("");
		return [(c >> 16) & 255, (c >> 8) & 255, c & 255] as RGB;
	}
  console.warn("Invalid hex code");
}

export function getFontColor(rgb: RGB | any) {
	const [red, green, blue] = rgb;
	return red * 0.299 + green * 0.587 + blue * 0.114 > 150 ? "black" : "white";
}

export function classNames(classes: string) {
  	return [/false/g, /true/g, /null/g, /undefined/g]
    .reduce((value, word) => value.replace(word, ""), classes.toString())
    .trim();
}

export const getValidChildren = (
	children: ReactNode | ReactNode[],
	validChildren: (
		child: ReactNode,
		index?: number,
		children?: ReactNode[]
	) => boolean
): ReactNode[] => Children.toArray(children).filter(validChildren);

export const getElementName = (element: ReactNode): string | null => {
	if (!isValidElement(element)) {
		return null;
	}
	return typeof element.type === "string" ? element.type : element.type.name;
};

export function addItem<T>(array: T[], item: T): T[] {
  	return [...array, item];
}

export function removeItem<T>(array: T[], item: T): T[] {
  	return array.filter((eachItem) => eachItem !== item);
}

export const getInitials = (fullName: string | undefined) => {
	const allNames = fullName?.trim().split(" ");
	const initials = allNames?.reduce((acc, curr, index) => {
		if (index === 0 || index === allNames.length - 1) {
		acc = `${acc}${curr.charAt(0).toUpperCase()}`;
		}
		return acc;
	}, "");
	return initials;
};

export const toRgba = (hexCode: string, opacity = 50) => {
	let hex = hexCode.replace('#', '');
	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const flattenColorPalette = (obj:any) => {
	const flattened: any = {}
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
		Object.assign(flattened, flattenColorPalette(obj[key]))
		} else {
		flattened[key] = obj[key]
		}
	})
	return flattened
};

export const uniq = (num:R5to10) => Math.random().toString(36).substring(2, num);

export const getRandomInteger = (min:number, max:number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

export const tailwindColors = ["rose", "pink", "fuchsia", "purple", "violet", "indigo", "blue", "sky", "cyan", "teal", "emerald", "green", "lime", "yellow", "amber", "orange", "red", "stone", "neutral", "zinc", "gray", "slate"];

export type Prefixes = "before" | "after";

export const colorsFunction = (type: ColorType, color: Colors, colorValue?: ColorValues, prefix?: Prefixes ) => {
  return `${tailwindColors.includes(color) ? 
    `${prefix && `${prefix}:`}${type}-${color}-${colorValue}` : `${prefix && `${prefix}:`}${type}-[${color}]`
  }`
};

export const bgColorsFunction = ( color: Colors) => {
  let value;
  color === "black" ? value = `bg-black-500`:
  color === "white" ? value = `bg-white-500`:
  color === "rose" ? value = `bg-rose-500`:
  color === "pink" ? value = `bg-pink-500`:
  color === "fuchsia" ? value = `bg-fuchsia-500`:
  color === "purple" ? value = `bg-purple-500`:
  color === "violet" ? value = `bg-violet-500`:
  color === "indigo" ? value = `bg-indigo-500`:
  color === "blue" ? value = `bg-blue-500`:
  color === "sky" ? value = `bg-sky-500`:
  color === "cyan" ? value = `bg-cyan-500`:
  color === "teal" ? value = `bg-teal-500`:
  color === "emerald" ? value = `bg-emerald-500`:
  color === "green" ? value = `bg-green-500`:
  color === "lime" ? value = `bg-lime-500`:
  color === "yellow" ? value = `bg-yellow-500`:
  color === "amber" ? value = `bg-amber-500`:
  color === "orange" ? value = `bg-orange-500`:
  color === "red" ? value = `bg-red-500`:
  color === "stone" ? value = `bg-stone-500`:
  color === "neutral" ? value = `bg-neutral-500`:
  color === "zinc" ? value = `bg-zinc-500`:
  color === "gray" ? value = `bg-gray-500`:
  color === "slate" ? value = `bg-slate-500`: 
  color === "none" ? value = null :
  null
  // value = `${type}-${color}`

  return value
};

export const radiusFunction = (size?: Radius) => {
	return `rounded-${size}`
};

export const shadowFunction = (size?: DefaultSizes) => {
	return `shadow-${size}`
};

export const spacingFunction = (size: DefaultSizes, direction: Direction) => {
  let value;
    size === 'none' ? value = null :
    size === 'sm' ? value = `space-${direction}-[2px]` :
    size === 'md' ? value = `space-${direction}-[4px]` :
    size === 'lg' ? value = `space-${direction}-[6px]` :
    size === 'xl' ? value = `space-${direction}-[8px]` :
    size === '2xl' ? value = `space-${direction}-[10px]` : null
	return value
};

export const widthFunction = (type: widthType, size?: DefaultSizes) => {
	let value;
    size === 'none' ? value = null :
    size === 'sm' ? value = `${type}-[1px]` :
    size === 'md' ? value = `${type}-[2px]` :
    size === 'lg' ? value = `${type}-[3px]` :
    size === 'xl' ? value = `${type}-[4px]` :
    size === '2xl' ? value = `${type}-[5px]` : null
	return value
};