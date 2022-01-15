import { classNames } from "@functions/index";
import { SkeletonProps, SkeletonCircleProps, SkeletonTextProps, SkeletonImageProps } from "@interfaces/SkeletonProps";

function Skeleton({
    className,
    width,
    height,
    radius=2,
    color="gray",
    startColor,
    gradientStartOpacity,
    gradientEndOpacity,
    endColor,
    animate=true,

}: SkeletonProps) {
  
    const colorSchemeType =
    color === "amber"
        ? "text-amber-200"
        : color === "blue"
        ? "text-blue-200"
        : color === "black"
        ? "text-black"
        : color === "blueGray"
        ? "text-blueGray-200 "
        : color === "coolGray"
        ? "text-coolGray-200"
        : color === "cyan"
        ? "text-cyan-200"
        : color === "emerald"
        ? "text-emerald-200 "
        : color === "fuchsia"
        ? "text-fuchsia-200"
        : color === "gray"
        ? "text-gray-200"
        : color === "green"
        ? "text-green-200"
        : color === "indigo"
        ? "text-indigo-200"
        : color === "lime"
        ? "text-lime-200"
        : color === "orange"
        ? "text-orange-200"
        : color === "pink"
        ? "text-pink-200"
        : color === "purple"
        ? "text-purple-200"
        : color === "red"
        ? "text-red-200"
        : color === "rose"
        ? "text-rose-200"
        : color === "sky"
        ? "text-sky-200"
        : color === "teal"
        ? "text-teal-200"
        : color === "violet"
        ? "text-violet-200"
        : color === "warmGray"
        ? "text-warmGray-200"
        : color === "white"
        ? "text-white"
        : color === "yellow"
        ? "text-yellow-200"
        : null;

    const animateType = animate ? `animate-pulse` : null;

    return (
        <svg
            width={width}
            height={height}
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="gradient">
                    <stop offset="0%" stopOpacity={gradientStartOpacity} stopColor={startColor} />
                    <stop offset="100%" stopOpacity={gradientEndOpacity} stopColor={endColor}/>
                </linearGradient>
            </defs>
            <rect 
                x="0" 
                y="0" 
                width="100%" 
                height="100%"
                fill={startColor && endColor ? 'url(#gradient)' : ''} 
                className={classNames(`${className} ${colorSchemeType} ${animateType} fill-current cursor-wait`)}
                rx={radius} 
                ry={radius}
            />
        </svg>
    );
};


function SkeletonCircle({
    className,
    color="gray",
    size = 50,
    animate=true,
    startColor,
    gradientStartOpacity,
    gradientEndOpacity,
    endColor,
}: SkeletonCircleProps) {
  
    const colorSchemeType =
    color === "amber"
        ? "text-amber-200"
        : color === "blue"
        ? "text-blue-200"
        : color === "black"
        ? "text-black"
        : color === "blueGray"
        ? "text-blueGray-200 "
        : color === "coolGray"
        ? "text-coolGray-200"
        : color === "cyan"
        ? "text-cyan-200"
        : color === "emerald"
        ? "text-emerald-200 "
        : color === "fuchsia"
        ? "text-fuchsia-200"
        : color === "gray"
        ? "text-gray-200"
        : color === "green"
        ? "text-green-200"
        : color === "indigo"
        ? "text-indigo-200"
        : color === "lime"
        ? "text-lime-200"
        : color === "orange"
        ? "text-orange-200"
        : color === "pink"
        ? "text-pink-200"
        : color === "purple"
        ? "text-purple-200"
        : color === "red"
        ? "text-red-200"
        : color === "rose"
        ? "text-rose-200"
        : color === "sky"
        ? "text-sky-200"
        : color === "teal"
        ? "text-teal-200"
        : color === "violet"
        ? "text-violet-200"
        : color === "warmGray"
        ? "text-warmGray-200"
        : color === "white"
        ? "text-white"
        : color === "yellow"
        ? "text-yellow-200"
        : null;

    const animateType = animate ? `animate-pulse` : null;

    return (
        <svg
            width={size}
            height={size}
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="gradient">
                    <stop offset="0%" stopOpacity={gradientStartOpacity} stopColor={startColor}/>
                    <stop offset="100%" stopOpacity={gradientEndOpacity} stopColor={endColor}/>
                </linearGradient>
            </defs>
            <circle 
                cx='50%' 
                cy='50%'
                r={size/2}
                fill={startColor && endColor ? 'url(#gradient)' : ''}
                className={classNames(`${className} ${colorSchemeType} ${animateType} fill-current cursor-wait`)}
            />
        </svg>
    );
};


function SkeletonText({
    className,
    width,
    height=8,
    radius=2,
    spacing=4,
    color="gray",
    startColor,
    gradientStartOpacity,
    gradientEndOpacity,
    endColor,
    numberOfLines=3,
    animate=true,
}: SkeletonTextProps) {
    const animateType = animate ? `animate-pulse` : null;
    const populateArray = [...Array(numberOfLines).keys()];
    const spacingAmount = spacing * 0.75;
    const colorSchemeType =
    color === "amber"
        ? "text-amber-200"
        : color === "blue"
        ? "text-blue-200"
        : color === "black"
        ? "text-black"
        : color === "blueGray"
        ? "text-blueGray-200 "
        : color === "coolGray"
        ? "text-coolGray-200"
        : color === "cyan"
        ? "text-cyan-200"
        : color === "emerald"
        ? "text-emerald-200 "
        : color === "fuchsia"
        ? "text-fuchsia-200"
        : color === "gray"
        ? "text-gray-200"
        : color === "green"
        ? "text-green-200"
        : color === "indigo"
        ? "text-indigo-200"
        : color === "lime"
        ? "text-lime-200"
        : color === "orange"
        ? "text-orange-200"
        : color === "pink"
        ? "text-pink-200"
        : color === "purple"
        ? "text-purple-200"
        : color === "red"
        ? "text-red-200"
        : color === "rose"
        ? "text-rose-200"
        : color === "sky"
        ? "text-sky-200"
        : color === "teal"
        ? "text-teal-200"
        : color === "violet"
        ? "text-violet-200"
        : color === "warmGray"
        ? "text-warmGray-200"
        : color === "white"
        ? "text-white"
        : color === "yellow"
        ? "text-yellow-200"
        : null;

    return (
        <svg
            aria-hidden="true"
            width={width}
            height={ ((numberOfLines - 1) * height * spacingAmount) + height }
        >
            <defs>
                <linearGradient id="gradient">
                    <stop offset="0%" stopOpacity={gradientStartOpacity} stopColor={startColor}/>
                    <stop offset="100%" stopOpacity={gradientEndOpacity} stopColor={endColor}/>
                </linearGradient>
            </defs>
            <g
                className={classNames(`${className} ${animateType} ${colorSchemeType} fill-current relative cursor-wait `)}
            >
                {populateArray.map((_, idx) =>
                    <rect 
                        key={idx}
                        x="0" 
                        y={ idx * height * spacingAmount }
                        width="100%" 
                        height={height}
                        fill={startColor && endColor ? 'url(#gradient)' : ''} 
                        rx={radius} 
                        ry={radius}
                    />
                )}
            </g>
        </svg>
    );
};


function SkeletonImage({
    className,
    size,
    color="gray",
    animate=true,
    startColor,
    gradientStartOpacity,
    gradientEndOpacity,
    endColor,
}: SkeletonImageProps) {
    const animateType = animate ? `animate-pulse` : null;

    const colorSchemeType =
    color === "amber"
        ? "text-amber-200"
        : color === "blue"
        ? "text-blue-200"
        : color === "black"
        ? "text-black"
        : color === "blueGray"
        ? "text-blueGray-200 "
        : color === "coolGray"
        ? "text-coolGray-200"
        : color === "cyan"
        ? "text-cyan-200"
        : color === "emerald"
        ? "text-emerald-200 "
        : color === "fuchsia"
        ? "text-fuchsia-200"
        : color === "gray"
        ? "text-gray-200"
        : color === "green"
        ? "text-green-200"
        : color === "indigo"
        ? "text-indigo-200"
        : color === "lime"
        ? "text-lime-200"
        : color === "orange"
        ? "text-orange-200"
        : color === "pink"
        ? "text-pink-200"
        : color === "purple"
        ? "text-purple-200"
        : color === "red"
        ? "text-red-200"
        : color === "rose"
        ? "text-rose-200"
        : color === "sky"
        ? "text-sky-200"
        : color === "teal"
        ? "text-teal-200"
        : color === "violet"
        ? "text-violet-200"
        : color === "warmGray"
        ? "text-warmGray-200"
        : color === "white"
        ? "text-white"
        : color === "yellow"
        ? "text-yellow-200"
        : null;
    
    return (
        <svg 
            width={size}
            height={size}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 31"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(`${className} ${animateType} ${colorSchemeType} fill-current cursor-wait `)}
        >
            <defs>
                <linearGradient id="gradient">
                    <stop offset="0%" stopOpacity={gradientStartOpacity} stopColor={startColor}/>
                    <stop offset="100%" stopOpacity={gradientEndOpacity} stopColor={endColor}/>
                </linearGradient>
            </defs>
            <path 
                d="M34 0H2C0.89543 0 0 0.89543 0 2V29C0 30.1046 0.89543 31 2 31H34C35.1046 31 36 30.1046 36 29V2C36 0.89543 35.1046 0 34 0Z" 
                className="fill-current opacity-20"
            />

            <path 
                d="M9.5 10.5L19.5 20.5L28.5 13.5L36 20V29C36 30.105 35.1046 31 34 31H2C0.8954 31 0 30.105 0 29V20L9.5 10.5Z"
                fill={startColor && endColor ? 'url(#gradient)' : ''}
            />
        </svg>
    );
};

export {
    Skeleton,
    SkeletonText, 
    SkeletonCircle,
    SkeletonImage
};