import { classNames } from '@functions/index';
import { ProgressBarProps, ProgressBarCaptionProps } from '@interfaces/ProgressBarProps';

const ProgressBar = ({ 
    value = 30, 
    colorScheme="sky", 
    children, 
    size = "md",
    radius = "full",
    ringWidth,
    ariaLabel= "content loading...",
    hasStripe,
    shimmer,
    animatedStripes,
    id,
    shadow,
    className,
}: ProgressBarProps) => {

    const sizeType = 
        size === "xs" ? "h-1" : 
        size === "sm" ? "h-2.5" :
        size === "md" ? "h-3.5" :
        size === "lg" ? "h-5" : null;

    const radiusType =
    radius === "sm"
        ? "rounded-sm before:rounded-sm"
        : radius === "md"
        ? "rounded-md before:rounded-md"
        : radius === "lg"
        ? "rounded-lg before:rounded-lg"
        : radius === "xl"
        ? "rounded-xl before:rounded-xl"
        : radius === "full"
        ? "rounded-full before:rounded-full"
        : radius === "none"
        ? "rounded-none before:rounded-none"
        : null;

    const colorSchemeType =
    colorScheme === "amber"
        ? "shadow-amber-500/60 bg-amber-500 ring-amber-500"
        : colorScheme === "blue"
        ? "shadow-blue-500/40 bg-blue-500 ring-blue-500"
        : colorScheme === "black"
        ? "shadow-black bg-black ring-black"
        : colorScheme === "blueGray"
        ? "shadow-blueGray-500/40 bg-blueGray-500 ring-blueGray-500 "
        : colorScheme === "coolGray"
        ? "shadow-coolGray-500/40 bg-coolGray-500 ring-coolGray-500"
        : colorScheme === "cyan"
        ? "shadow-cyan-500/40 bg-cyan-500 ring-cyan-500"
        : colorScheme === "emerald"
        ? "shadow-emerald-500/40 bg-emerald-500 ring-emerald-500"
        : colorScheme === "fuchsia"
        ? "shadow-fuchsia-500/40 bg-fuchsia-500 ring-fuchsia-500"
        : colorScheme === "gray"
        ? "shadow-gray-500/40 bg-gray-500 ring-gray-500"
        : colorScheme === "green"
        ? "shadow-green-500/40 bg-green-500 ring-green-500"
        : colorScheme === "indigo"
        ? "shadow-indigo-500/40 bg-indigo-500 ring-indigo-500"
        : colorScheme === "lime"
        ? "shadow-lime-500/40 bg-lime-500 ring-lime-500"
        : colorScheme === "orange"
        ? "shadow-orange-500/40 bg-orange-500 ring-orange-500"
        : colorScheme === "pink"
        ? "shadow-pink-500/40 bg-pink-500 ring-pink-500"
        : colorScheme === "purple"
        ? "shadow-purple-500/40 bg-purple-500 ring-purple-500"
        : colorScheme === "red"
        ? "shadow-red-500/40 bg-red-500 ring-red-500"
        : colorScheme === "rose"
        ? "shadow-rose-500/40 bg-rose-500 ring-rose-500"
        : colorScheme === "sky"
        ? "shadow-sky-500/40 bg-sky-500 ring-sky-500"
        : colorScheme === "teal"
        ? "shadow-teal-500/40 bg-teal-500 ring-teal-500"
        : colorScheme === "violet"
        ? "shadow-violet-500/40 bg-violet-500 ring-violet-500"
        : colorScheme === "warmGray"
        ? "shadow-warmGray-500/40 bg-warmGray-500 ring-warmGray-500"
        : colorScheme === "white"
        ? "shadow-white bg-white ring-white"
        : colorScheme === "yellow"
        ? "shadow-yellow-500/40 bg-yellow-500 ring-yellow-500"
        : null;
    
    const indeterminateColorType =
    colorScheme === "amber"
        ? "before:bg-amber-500"
        : colorScheme === "blue"
        ? "before:bg-blue-500"
        : colorScheme === "black"
        ? "before:bg-black"
        : colorScheme === "blueGray"
        ? "before:bg-blueGray-500 "
        : colorScheme === "coolGray"
        ? "before:bg-coolGray-500"
        : colorScheme === "cyan"
        ? "before:bg-cyan-500"
        : colorScheme === "emerald"
        ? "before:bg-emerald-500 "
        : colorScheme === "fuchsia"
        ? "before:bg-fuchsia-500"
        : colorScheme === "gray"
        ? "before:bg-gray-500"
        : colorScheme === "green"
        ? "before:bg-green-500"
        : colorScheme === "indigo"
        ? "before:bg-indigo-500"
        : colorScheme === "lime"
        ? "before:bg-lime-500"
        : colorScheme === "orange"
        ? "before:bg-orange-500"
        : colorScheme === "pink"
        ? "before:bg-pink-500"
        : colorScheme === "purple"
        ? "before:bg-purple-500"
        : colorScheme === "red"
        ? "before:bg-red-500"
        : colorScheme === "rose"
        ? "before:bg-rose-500"
        : colorScheme === "sky"
        ? "before:bg-sky-500"
        : colorScheme === "teal"
        ? "before:bg-teal-500"
        : colorScheme === "violet"
        ? "before:bg-violet-500"
        : colorScheme === "warmGray"
        ? "before:bg-warmGray-500"
        : colorScheme === "white"
        ? "before:bg-white"
        : colorScheme === "yellow"
        ? "before:bg-yellow-500"
        : null;

    const ringWidthType = 
        ringWidth === "xs" ? "ring-1" : 
        ringWidth === "sm" ? "ring-2" :
        ringWidth === "md" ? "ring-" :
        ringWidth === "lg" ? "ring-4" : null;

    const hasStripeType = 
        hasStripe ? "relative before:absolute before:inset-0 before:bg-stripes " : null;

    const shadowType = 
        shadow === "xs" ? "shadow-sm" :
        shadow === "sm" ? "shadow" : 
        shadow === "md" ? "shadow-md" : 
        shadow === "lg" ? "shadow-lg" : null;

    const shimmerType = 
        shimmer ? "after:absolute after:translate-x-[-100%] after:inset-0 after:bg-shimmer after:animate-shimmer" : null;

    const overflowType = 
        shimmer || animatedStripes || !value ? "overflow-hidden" : null;

    const animatedStripesType = 
        animatedStripes ? "before:ml-[-20px] before:mr-[10px] before:animate-barberpole" : null;

    const indeterminateAnimationType = 
        !value ? "before:absolute before:inset-0 before:animate-indeterminate before:origin-[0%_50%]" : null;
    
    return (
        <div 
            className={classNames(`${className} ${colorSchemeType} ${sizeType} ${ringWidthType} ${overflowType} ${indeterminateColorType} ${indeterminateAnimationType} relative w-full bg-opacity-[0.15] inline-flex items-stretch`)}
            aria-label={ariaLabel}
            id={id}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value}
            role="progressbar"
        >
            {value && 
                <div 
                    style={{width: `${value}%`}}
                    className={classNames(`${sizeType} ${radiusType} ${colorSchemeType} ${hasStripeType} ${shadowType} ${shimmerType} ${animatedStripesType} before:absolute before:inset-0 relative `)} 
                >
                    {children}
                </div>
            }
        </div>
    );
};


const ProgressBarCaption = ({
    className,
    caption,
}: ProgressBarCaptionProps) => { 
    
    return (
        <h6 className={classNames(`${className} absolute tracking tight lining-nums flex h-full items-center w-full justify-center`)}>
            {caption}
        </h6>   
    )
}

export { ProgressBar, ProgressBarCaption };
  
