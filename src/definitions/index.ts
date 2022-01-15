export type RGB = [number, number, number];
export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e'| 'f' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type ShortColor = `#${Digit}${Digit}${Digit}`;
export type Hex = ShortColor ;
export type R10 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type R10to100 = | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type R5to10 = | 5 | 6 | 7 | 8 | 9 | 10;
export type Direction = 'x' | 'y';
export type widthType =  | "ring" 
| "ring-offset" 
| "border" 
| "divide" 
| "outline" 
| "stroke";
export type SpacingScale = "px"
| 0.5	
| 1	
| 1.5		
| 2
| 2.5			
| 3	
| 3.5			
| 4	
| 5		
| 6		
| 7		
| 8	
| 9			
| 10			
| 11			
| 12		
| 14		
| 16		
| 20		
| 24		
| 28		
| 32		
| 36		
| 40			
| 44			
| 48			
| 52			
| 56			
| 60			
| 64			
| 72			
| 80			
| 96
export type R100 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 5 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 6 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 100;
export type ColorValues = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type ColorType = 
    | "text" 
    | "bg" 
    | "ring" 
    | "ring-offset" 
    | "border" 
    | "divide" 
    | "outline" 
    | "shadow" 
    | "accent" 
    | "caret" 
    | "fill" 
    | "stroke";
export type DefaultSizes = "none" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AlphaSizes = "sm" | "md" | "lg" | "xl";
export type Sizes = "sm" | "md" | "lg" | "xl" | "full";
export type CustomSizes = "xs" | "sm" | "md" | "lg" | "none";
export type Variants = "solid" | "outline" | "ghost" | "text" | "link";
export type AnimationType = "wiggle" | "grow" | "roll";
export type Spacing = "sm" | "md" | "lg" | "xl";
export type Colors =
    | "none"
    | "rose"
    | "pink"
    | "fuchsia"
    | "purple"
    | "violet"
    | "indigo"
    | "blue"
    | "sky"
    | "cyan"
    | "teal"
    | "emerald"
    | "green"
    | "lime"
    | "yellow"
    | "amber"
    | "orange"
    | "red"
    | "stone"
    | "neutral"
    | "zinc"
    | "gray"
    | "slate"
    | string ;
export type Radius = "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none";
export type Status = "success" | "warning" | "error" | "info";
export type CustomVariants = "subtle" | "solid" | "top-accent" | "left-accent";
export type AlphaDirection = "column" | "row";
export type InputVariants = "standard" | "outline" | "filled" | "none";
export type CSSColors = 
    | 'aliceblue'
    | 'antiquewhite'
    | 'aqua'
    | 'aquamarine'
    | 'azure'
    | 'beige' 
    | 'bisque'
    | 'black'
    | 'blanchedalmond'
    | 'blue'
    | 'blueviolet'
    | 'brown'
    | 'burlywood'
    | 'burntsienna'
    | 'cadetblue'
    | 'chartreuse'  
    | 'chocolate' 
    | 'coral'
    | 'cornflowerblue'  
    | 'cornsilk'  
    | 'crimson'
    | 'cyan'
    | 'darkblue'  
    | 'darkcyan' 
    | 'darkgoldenrod'  
    | 'darkgray'
    | 'darkgreen'  
    | 'darkgrey'
    | 'darkkhaki'  
    | 'darkmagenta'  
    | 'darkolivegreen'  
    | 'darkorange'
    | 'darkorchid' 
    | 'darkred'
    | 'darksalmon'  
    | 'darkseagreen'  
    | 'darkslateblue'  
    | 'darkslategray' 
    | 'darkslategrey' 
    | 'darkturquoise' 
    | 'darkviolet'
    | 'deeppink'
    | 'deepskyblue'  
    | 'dimgray'
    | 'dimgrey' 
    | 'dodgerblue'  
    | 'firebrick'
    | 'floralwhite'  
    | 'forestgreen' 
    | 'fuchsia'
    | 'gainsboro'  
    | 'ghostwhite'  
    | 'gold'
    | 'goldenrod'  
    | 'gray'
    | 'green'  
    | 'greenyellow'  
    | 'grey'
    | 'honeydew'  
    | 'hotpink'
    | 'indianred'  
    | 'indigo'
    | 'ivory'
    | 'khaki' 
    | 'lavender'  
    | 'lavenderblush'  
    | 'lawngreen'
    | 'lemonchiffon'  
    | 'lightblue'
    | 'lightcoral'  
    | 'lightcyan'
    | 'lightgoldenrodyellow'  
    | 'lightgray'
    | 'lightgreen'  
    | 'lightgrey'
    | 'lightpink'  
    | 'lightsalmon'  
    | 'lightseagreen'  
    | 'lightskyblue' 
    | 'lightslategray'  
    | 'lightslategrey'  
    | 'lightsteelblue' 
    | 'lightyellow' 
    | 'lime'
    | 'limegreen'  
    | 'linen'
    | 'magenta'  
    | 'maroon'
    | 'mediumaquamarine'  
    | 'mediumblue'
    | 'mediumorchid'  
    | 'mediumpurple' 
    | 'mediumseagreen'  
    | 'mediumslateblue'  
    | 'mediumspringgreen'
    | 'mediumturquoise'
    | 'mediumvioletred' 
    | 'midnightblue'
    | 'mintcream'
    | 'mistyrose' 
    | 'moccasin'
    | 'navajowhite'  
    | 'navy'
    | 'oldlace'  
    | 'olive'
    | 'olivedrab'  
    | 'orange'
    | 'orangered'  
    | 'orchid'  
    | 'palegoldenrod'  
    | 'palegreen'
    | 'paleturquoise'  
    | 'palevioletred' 
    | 'papayawhip'
    | 'peachpuff' 
    | 'peru' 
    | 'pink' 
    | 'plum' 
    | 'powderblue'  
    | 'purple'  
    | 'rebeccapurple'  
    | 'red'
    | 'rosybrown'  
    | 'royalblue' 
    | 'saddlebrown'  
    | 'salmon' 
    | 'sandybrown'  
    | 'seagreen'
    | 'seashell'
    | 'sienna'
    | 'silver' 
    | 'skyblue'  
    | 'slateblue' 
    | 'slategray' 
    | 'slategrey' 
    | 'snow'
    | 'springgreen'  
    | 'steelblue'
    | 'tan'
    | 'teal'  
    | 'thistle'  
    | 'tomato'
    | 'turquoise'  
    | 'violet'
    | 'wheat'
    | 'white' 
    | 'whitesmoke'  
    | 'yellow'
    | 'yellowgreen'
    | string;	