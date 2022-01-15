import { ReactNode } from "react";
import { Colors, CustomSizes } from "@definitions/index";

export interface AvatarProps {
  /**
   * if `true` avatar will show border based on the colorScheme
   */
  bordered?: boolean;
  children?: ReactNode;
  /**
   * `Tailwindcss` classNames e.g `"mr-2 rounded"`.
   */
  className?: string;
  /**
   * The Avatar color `based on colorScheme from tailwindConfig`
   */
  color?: Colors;
  /**
   * The name of the person in the avatar. - if `src` has loaded, the name will be used as the alt attribute of the `img` - If `src` is not loaded, the name will be used to create the initials
   */
  name?: string | undefined;
  opacity?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  radius?: "squared" | "rounded";
  /**
   * The image url of the `Avatar`
   */
  src?: string;
  /**
   * The size of the `Avatar` `"xs" | "sm" | "md" | "lg"`
   */
  size?: CustomSizes;
  /**
   * The Avatar textColor `based on colorScheme from tailwindConfig`
   */
  textColor?: Colors;
  /**
   * if `true` avatar will zoom on hover
   */
  zoomed?: boolean;
}
