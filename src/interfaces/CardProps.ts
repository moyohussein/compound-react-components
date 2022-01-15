import { ReactNode } from "react";
import { AlphaDirection, AlphaSizes } from "@definitions/index";

export interface CardProps {
  className?: string;
  children?: ReactNode;
  link?: string;
  direction?: AlphaDirection;
  fontSize?: AlphaSizes;
}

export interface CardActionAreaProps {
  className?: string;
  children?: ReactNode;
}

export interface CardHeaderProps {
  className?: string;
  children?: ReactNode;
}

export interface CardMediaProps {
  className?: string;
  src?: string;
  as?: "img" | "picture" | "audio" | "video" | "figure";
  width?: number;
  height?: number;
  borderRadius?: number;
}

export interface CardTitleProps {
  className?: string;
  title?: string;
}

export interface CardSubtitleProps {
  className?: string;
  subtitle?: string;
}

export interface CardContentProps {
  className?: string;
  content?: string;
}
