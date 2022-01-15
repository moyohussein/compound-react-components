import { Colors, R10, CSSColors } from "@definitions/index";

export interface SkeletonProps {
    className?: string;
    width?: number;
    height?: number;
    radius?: R10;
    animate?: boolean;
    color?: Colors;
    startColor?: CSSColors;
    gradientStartOpacity?: R10;
    gradientEndOpacity?: R10;
    endColor?: CSSColors
};
export interface SkeletonCircleProps {
    className?: string;
    color?: Colors;
    size?: number;
    animate?: boolean;
    startColor?: CSSColors;
    gradientStartOpacity?: R10;
    gradientEndOpacity?: R10;
    endColor?: CSSColors
};

export interface SkeletonTextProps {
    className?: string;
    width?: number;
    numberOfLines?: number;
    height?: number;
    radius?: R10;
    animate?: boolean;
    color?: Colors;
    spacing?: number;
    startColor?: CSSColors;
    gradientStartOpacity?: R10;
    gradientEndOpacity?: R10;
    endColor?: CSSColors
};

export interface SkeletonImageProps {
    className?: string;
    size?: number;
    color?: Colors;
    animate?: boolean;
    startColor?: CSSColors;
    gradientStartOpacity?: R10;
    gradientEndOpacity?: R10;
    endColor?: CSSColors
};