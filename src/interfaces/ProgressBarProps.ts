import { CustomSizes, Radius, Colors, R100 } from "@definitions/index";

export interface ProgressBarProps {
    children?: React.ReactNode;
    value?: R100;
    colorScheme?: Colors;
    ariaLabel?: string;
    id?: string;
    ringWidth?: CustomSizes;
    size?: CustomSizes;
    className?: string;
    radius?: Radius;
    hasStripe?: boolean;
    shadow?: CustomSizes;
    shimmer?: boolean;
    animatedStripes?: boolean
};

export interface ProgressBarCaptionProps {
    caption?: React.ReactNode;
    className?: string;
};
  