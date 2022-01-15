import { Colors, CustomSizes } from "@definitions/index";
import { CSSProperties } from "react";
export interface LoadingBarProps {
    className?: string;
    loadingState?: 'start' | 'done';
    style?: CSSProperties;
    shimmer?: boolean;
    id?: string;
    colorScheme?: Colors;
    shadow?: boolean;
    rounded?: boolean;
    size?: CustomSizes;
};