import { classNames } from "@functions/index";
import { AvatarProps } from "@interfaces/AvatarProps";

export default function Avatar({
  className,
  src,
  color = "blueGray",
  textColor = "black",
  opacity = 10,
  children,
  size = "md",
  zoomed = false,
  name,
  radius = "rounded",
  bordered = false,
}: AvatarProps) {
  const radiusType = radius === "rounded" ? "rounded-full" : "rounded-[25%]";

  const sizeType =
    size === "xs"
      ? "avatar-xs"
      : size === "sm"
      ? "avatar-sm"
      : size === "md"
      ? "avatar-md"
      : size === "lg"
      ? "avatar-lg"
      : size === "xl"
      ? "avatar-xl"
      : null;

  const iconSizeType =
    size === "xs"
      ? "text-[14px]"
      : size === "sm"
      ? "text-[18px]"
      : size === "md"
      ? "text-[20px]"
      : size === "lg"
      ? "text-[24px]"
      : null;

  const borderedType = bordered ? "border-2" : "border-0";

  const opacityType =
    opacity === 0
      ? "bg-opacity-0"
      : opacity === 1
      ? "bg-opacity-10"
      : opacity === 2
      ? "bg-opacity-20"
      : opacity === 3
      ? "bg-opacity-30"
      : opacity === 4
      ? "bg-opacity-40"
      : opacity === 5
      ? "bg-opacity-50"
      : opacity === 6
      ? "bg-opacity-60"
      : opacity === 7
      ? "bg-opacity-70"
      : opacity === 8
      ? "bg-opacity-80"
      : opacity === 9
      ? "bg-opacity-90"
      : opacity === 10
      ? "bg-opacity-100"
      : null;

  const colorType =
    color === "amber"
      ? "bg-amber-700 border-amber-700"
      : color === "blue"
      ? "bg-blue-700 border-blue-700"
      : color === "black"
      ? "bg-black border-black"
      : color === "blueGray"
      ? "bg-blueGray-700 border-blueGray-700 "
      : color === "coolGray"
      ? "bg-coolGray-700 border-coolGray-700"
      : color === "cyan"
      ? "bg-cyan-700 border-cyan-700"
      : color === "emerald"
      ? "bg-emerald-700 border-emerald-700"
      : color === "fuchsia"
      ? "bg-fuchsia-700 border-fuchsia-700"
      : color === "gray"
      ? "bg-gray-700 border-gray-700"
      : color === "green"
      ? "bg-green-700 border-green-700"
      : color === "indigo"
      ? "bg-indigo-700 border-indigo-700"
      : color === "lime"
      ? "bg-lime-700 border-lime-700"
      : color === "orange"
      ? "bg-orange-700 border-orange-700"
      : color === "pink"
      ? "bg-pink-700 border-pink-700"
      : color === "purple"
      ? "bg-purple-700 border-purple-700"
      : color === "red"
      ? "bg-red-700 border-red-700"
      : color === "rose"
      ? "bg-rose-700 border-rose-700"
      : color === "sky"
      ? "bg-sky-700 border-sky-700"
      : color === "teal"
      ? "bg-teal-700 border-teal-700"
      : color === "violet"
      ? "bg-violet-700 border-violet-700"
      : color === "warmGray"
      ? "bg-warmGray-700 border-warmGray-700"
      : color === "white"
      ? "bg-white border-white"
      : color === "yellow"
      ? "bg-yellow-700 border-yellow-700"
      : null;

  const textColorType =
    textColor === "amber"
      ? "text-amber-500"
      : textColor === "blue"
      ? "text-blue-500"
      : textColor === "black"
      ? "text-black"
      : textColor === "blueGray"
      ? "text-blueGray-500 "
      : textColor === "coolGray"
      ? "text-coolGray-500"
      : textColor === "cyan"
      ? "text-cyan-500"
      : textColor === "emerald"
      ? "text-emerald-500 "
      : textColor === "fuchsia"
      ? "text-fuchsia-500"
      : textColor === "gray"
      ? "text-gray-500"
      : textColor === "green"
      ? "text-green-500"
      : textColor === "indigo"
      ? "text-indigo-500"
      : textColor === "lime"
      ? "text-lime-500"
      : textColor === "orange"
      ? "text-orange-500"
      : textColor === "pink"
      ? "text-pink-500"
      : textColor === "purple"
      ? "text-purple-500"
      : textColor === "red"
      ? "text-red-500"
      : textColor === "rose"
      ? "text-rose-500"
      : textColor === "sky"
      ? "text-sky-500"
      : textColor === "teal"
      ? "text-teal-500"
      : textColor === "violet"
      ? "text-violet-500"
      : textColor === "warmGray"
      ? "text-warmGray-500"
      : textColor === "white"
      ? "text-white"
      : textColor === "yellow"
      ? "text-yellow-500"
      : null;

  const zoomedType = zoomed ? "hover:scale-110" : null;

  const textSizeType =
    size === "xs"
      ? "text-[10px]"
      : size === "sm"
      ? "text-[12px]"
      : size === "md"
      ? "text-[14px]"
      : size === "lg"
      ? "text-[16px]"
      : null;
  
  return (
    <div
      className={classNames(
        `inline-flex items-center relative justify-center font-light ${className} ${colorType} ${radiusType} ${sizeType} ${borderedType} ${opacityType} ${zoomedType}`
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          className="object-contain max-w-full absolute"
          alt={name}
        />
      ) : name ? (
        <span className={`${textColor} ${textSizeType}`}>
          {/* {getInitials(name)} */}
          {name}
        </span>
      ) : (
        <span className={`${textColorType} ${iconSizeType}`}>{children}</span>
      )}
    </div>
  );
}
