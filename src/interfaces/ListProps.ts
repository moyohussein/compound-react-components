import { createContext } from "react";

export interface ListContext {
  spacing?: "sm" | "md" | "lg" | "none";
  gutters?: boolean;
  listStyleType?: "ul" | "ol" | "menu" | "unstyled";
}

export const ListCtx = createContext<ListContext>({});

export interface ListProps {
  children: React.ReactNode;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  width?: "full" | "auto";
  /**
   * if `true` list will show a divider.
   */
  divider?: boolean;
  spacing?: "sm" | "md" | "lg" | "none";
  dividerColor?: "white" | "black" | "grey" | "none";
  listStylePosition?: "inside" | "outside";
  /**
   * HTML element to render List `"ul","ol","menu", "unstyled"`.
   */
  listStyleType?: "ul" | "ol" | "menu" | "unstyled";
  /**
   * if `true` spacing will be applied.
   */
  gutters?: boolean;
  start?: number;
  /**
   * Reference to the HTMLOLELEMENT.
   */
  ulRef?: React.Ref<HTMLUListElement>;
  /**
   * Reference to the HTMLULELEMENT.
   */
  olRef?: React.Ref<HTMLOListElement>;
}

export interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => {};
}
