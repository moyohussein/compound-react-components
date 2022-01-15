import { classNames, } from '@functions/index';
import { LoadingBarProps } from '@interfaces/LoadingBarProps';

export const LoadingBar = ({ 
    colorScheme="sky", 
    rounded = true,
    style,
    shimmer,
    loadingState,
    id,
    size = "xs",
    shadow = true,
    className,
}: LoadingBarProps) => {

    const sizeType = 
        size === "xs" ? "h-[2px]" : 
        size === "sm" ? "h-[4px]" :
        size === "md" ? "h-[6px]" :
        size === "lg" ? "h-[8px]" : null;

    const roundedType = rounded ? 'rounded-full': 'rounded-none';

    const loadingBarColorSchemeType =
    colorScheme === "amber"
        ? "before:shadow-amber-500/50 bg-amber-500"
        : colorScheme === "blue"
        ? "before:shadow-blue-500/50 bg-blue-500 500"
        : colorScheme === "black"
        ? "before:shadow-black bg-black"
        : colorScheme === "blueGray"
        ? "before:shadow-blueGray-500/50 bg-blueGray-500"
        : colorScheme === "coolGray"
        ? "before:shadow-coolGray-500/50 bg-coolGray-500"
        : colorScheme === "cyan"
        ? "before:shadow-cyan-500/50 bg-cyan-500 500"
        : colorScheme === "emerald"
        ? "before:shadow-emerald-500/50 bg-emerald-500"
        : colorScheme === "fuchsia"
        ? "before:shadow-fuchsia-500/50 bg-fuchsia-500"
        : colorScheme === "gray"
        ? "before:shadow-gray-500/50 bg-gray-500 500"
        : colorScheme === "green"
        ? "before:shadow-green-500/50 bg-green-500"
        : colorScheme === "indigo"
        ? "before:shadow-indigo-500/50 bg-indigo-500"
        : colorScheme === "lime"
        ? "before:shadow-lime-500/50 bg-lime-500 500"
        : colorScheme === "orange"
        ? "before:shadow-orange-500/50 bg-orange-500"
        : colorScheme === "pink"
        ? "before:shadow-pink-500/50 bg-pink-500 500"
        : colorScheme === "purple"
        ? "before:shadow-purple-500/50 bg-purple-500"
        : colorScheme === "red"
        ? "before:shadow-red-500/50 bg-red-500"
        : colorScheme === "rose"
        ? "before:shadow-rose-500/50 bg-rose-500"
        : colorScheme === "sky"
        ? "before:shadow-sky-500/50 bg-sky-500"
        : colorScheme === "teal"
        ? "before:shadow-teal-500/50 bg-teal-500"
        : colorScheme === "violet"
        ? "before:shadow-violet-500/50 bg-violet-500"
        : colorScheme === "warmGray"
        ? "before:shadow-warmGray-500/50 bg-warmGray-500"
        : colorScheme === "white"
        ? "before:shadow-white bg-white"
        : colorScheme === "yellow"
        ? "before:shadow-yellow-500/50 bg-yellow-500"
        : null;
    
    
    const loadingBarShadowType = 
        shadow ? 
        "before:block before:absolute before:w-[100px] before:h-full before:right-0 before:shadow-[0px_0px_10px_rgb(0_0_0_/_0.05),_0px_0px_5px_rgb(0_0_0_/_0.05)] before:rotate-3 before:-translate-y-0.5" : null;

    const shimmerType = 
        shimmer ? "after:absolute after:translate-x-[-100%] after:inset-0 after:bg-shimmer after:animate-shimmer" : null;
    
    const loadingBarAnimateType =
        loadingState === 'start' ? `animate-startTranslate` :
        loadingState === 'done' ? `animate-finishTranslate` : null;
    
    return (
        <span
            style={style}
            className={classNames(`${className} ${loadingBarColorSchemeType} ${shimmerType} ${loadingBarShadowType} ${roundedType} ${sizeType} [transform:translate3d(-101%,_0px,_0px)] z-[1000] top-0 left-0 w-full fixed opacity-100 ${loadingBarAnimateType}`)}
            id={id}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
        />
    );
};