export interface DividerProps {
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  /**
   * Divider color `"grey" | "white" | "black"`.
   */
  dividerColor?: "grey" | "white" | "black";
  /**
   * Divider orientation `"horizontal" | "vertical"`
   */
  orientation?: "horizontal" | "vertical";
}

export interface ColorComponentProps extends DividerProps {}
