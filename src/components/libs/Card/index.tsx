import { useContext } from "react";
import { classNames } from "@functions/index";
import { Base } from "../Base";
import { CardCtx } from "@contexts/index";
import {
  CardActionAreaProps,
  CardContentProps,
  CardHeaderProps,
  CardMediaProps,
  CardProps,
  CardSubtitleProps,
  CardTitleProps,
} from "@interfaces/CardProps";

function Card({
  className,
  children,
  direction = "row",
  fontSize = "md",
  link,
}: CardProps) {
  const context = { fontSize, link };

  const directionType =
    direction === "column"
      ? "flex-col space-y-3 py-6"
      : "flex-row space-x-3 py-3";

  return (
    <CardCtx.Provider value={context}>
      <article
        className={classNames(
          `${className} ${directionType} relative flex items-center px-4`
        )}
      >
        {children}
      </article>
    </CardCtx.Provider>
  );
}

function CardActionArea({ className, children }: CardActionAreaProps) {
  const { link } = useContext(CardCtx);
  return (
    <a
      className={classNames(`${className} absolute inset-0`)}
      aria-describedby="card description"
      href={link}
    >
      {children}
    </a>
  );
}

function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <header className={classNames(`${className} leading-tight space-y-2`)}>
      {children}
    </header>
  );
}

function CardMedia({
  className,
  as,
  width,
  height,
  borderRadius,
}: CardMediaProps) {
  return (
    <div
      className="relative"
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      <Base
        as={as || "img"}
        className={classNames(
          `${className} object-contain max-w-full absolute`
        )}
      />
    </div>
  );
}

function CardTitle({ className, title }: CardTitleProps) {
  const { fontSize } = useContext(CardCtx);

  const fontSizeType =
    fontSize === "sm"
      ? "text-[14px]"
      : fontSize === "md"
      ? "text-[16px]"
      : fontSize === "lg"
      ? "text-[18px]"
      : fontSize === "xl"
      ? "text-[20px]"
      : null;

  return (
    <h2 className={classNames(`${className} ${fontSizeType} font-bold `)}>
      {title}
    </h2>
  );
}

function CardSubtitle({ className, subtitle }: CardSubtitleProps) {
  const { fontSize } = useContext(CardCtx);

  const fontSizeType =
    fontSize === "sm"
      ? "text-[12px]"
      : fontSize === "md"
      ? "text-[14px]"
      : fontSize === "lg"
      ? "text-[16px]"
      : fontSize === "xl"
      ? "text-[18px]"
      : null;

  return (
    <span className={classNames(`${className} ${fontSizeType} font-light `)}>
      {subtitle}
    </span>
  );
}

function CardContent({ className, content }: CardContentProps) {
  const { fontSize } = useContext(CardCtx);

  const fontSizeType =
    fontSize === "sm"
      ? "text-[12px]"
      : fontSize === "md"
      ? "text-[14px]"
      : fontSize === "lg"
      ? "text-[16px]"
      : fontSize === "xl"
      ? "text-[18px]"
      : null;

  return (
    <p className={classNames(`${className} ${fontSizeType} `)}>{content}</p>
  );
}

export {
  Card,
  CardMedia,
  CardTitle,
  CardContent,
  CardSubtitle,
  CardHeader,
  CardActionArea,
};
