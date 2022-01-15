/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js, ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px", //mobile
      tablet: "640px", //tablet
      laptop: "1024px", //laptop
      desktop: "1280px", //desktop
    },   
    // colors: {
    //   inherit: 'inherit',
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   rose: colors.rose,
    //   pink: colors.pink,
    //   fuchsia: colors.fuchsia,
    //   purple: colors.purple,
    //   violet: colors.violet,
    //   indigo: colors.indigo, 
    //   blue: colors.blue,
    //   sky: colors.sky,
    //   cyan: colors.cyan, 
    //   teal: colors.teal,
    //   emerald: colors.emerald, 
    //   green: colors.green,
    //   lime: colors.lime,
    //   yellow: colors.yellow,
    //   amber: colors.amber,
    //   orange: colors.orange,
    //   slate: colors.warmGray,
    //   zinc: colors.trueGray,
    //   gray: colors.gray, 
    //   stone: colors.blueGray,
    //   neutral: colors.coolGray,
    //   red: colors.red, 
    //   persia: "#3f3cbb"
    // },    
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      80: '0.8',
      90: '0.9',
      100: '1',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-45deg)' },
          '50%': { transform: 'rotate(45deg)' },
        },
        'fade': {
          'from': { opacity: 1 },
          'to' : { opacity: 0 },
        },
        'flow-in': {
          'from': { transform: 'translateX(5px)' },
          'to' : { transform: 'translateX(0px)' },
        },
        'grow': {
          'from': { transform: 'scale(1)' },
          'to' : { transform: 'scale(0.9)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out-down': {
          'from': { opacity: '1', transform: 'translateY(0px)' },
          'to': { opacity: '0', transform: 'translateY(10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out-up': {
          'from': { opacity: '1', transform: 'translateY(0px)' },
          'to': { opacity: '0', transform: 'translateY(10px)' },
        },
        'roll': { 
          '0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%': { transform: 'scale(1)'},
          '50%': { transform: 'scaleY(0)' }
        },
        'barberpole': {
          '0%': { transform: 'translateX(0px)'},
          '100%': { transform: 'translateX(20px)'}
        },
        'indeterminate': {
          '0%': { transform: 'translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.3)' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)' }
        },
        'movement': {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateX(0rem)' },
          '10%': { transform: 'translateX(2rem)' },
          '30%': { transform: 'translateX(-2rem)' },
          '50%': { transform: 'translateY(1rem)' },
          '70%': { transform: 'translateY(-1rem)' },
        },
        'fillBar': {
          '0%': {  transform: 'translateX(-100%)' },
          '100%': {  transform: 'translateX(100%)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)', opacity: '0.9'},
          '100%': { transform: 'translateX(0%)', opacity: '0.1'}
        },
        'startTranslate': {
          'to': { transform: 'translate3d(-5%, 0, 0)'} 
        },
        'finishTranslate': {
          'from': { transform: 'translate3d(-5%, 0, 0)'},
          'to': { transform: 'translate3d(100%, 0, 0)'} 
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'startTranslate': 'startTranslate 15s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'finishTranslate': 'finishTranslate 0.2s ease',
        'grow': 'grow 1s ease-in-out infinite',
        'flow-in': 'flow-in 0.5s ease-in-out',
        'indeterminate': 'indeterminate 1s linear infinite',
        'barberpole': 'barberpole 0.25s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        'roll': 'roll 1s ease-in-out infinite ',
        'fillbar': "fillbar 10s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        'movement': 'movement 4s infinite'
      },
      backgroundImage: (theme) => ({
        'tick': `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 24 24'> <path strokeLinecap='round' strokeLinejoin='round' d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'></path> </svg>")`,

        'dash': `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 24 24'> <path strokeLinecap='round' strokeLinejoin='round' d='M5 11h14v2H5z'/> </svg>")`,
        
        'dot': `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23FFF'  viewBox='0 0 24 24'> <circle cx='12' cy='12' r='6' /> </svg>")`,
      }),
    },
  },
  variants:{
    extend: {
      animation: ['hover', 'group-hover'],
      backgroundColor: ['group-focus'],
      colors: {
        current: "currentColor",
        transparent: "transparent",
        bang: {
          light: "#fff",
          dark: "rgb(18, 18, 18)"
        },
        hover: {
          light: "rgba(0, 0, 0, 0.04)",
          dark: "rgba(255, 255, 255, 0.08)"
        },
        blue: "#3B82F6",
        white: "#fff",
        black: "#000",
        primary:"#306F82",
        secondary: "#07ABCC",
        error: "#EF4444",
        gray: {
          light: "#D1D5DB",
          dark: "#6B7280"
        },
        main: {
          light: "#fff",
          dark: "#2D3748"
        },
        paper: {
          light: "#dddddd",
          dark: "#1A202C",
        },
        input: {
          light: "#EDF2F7",
          dark: "",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('peer-aria-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.peer[aria-checked='true'] .${e(`peer-aria-checked${separator}${className}`)}`
        })
      })
    }),
    
    plugin(function({ addVariant, e }) {
      addVariant('moz-progress-bar', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`moz-progress-bar${separator}${className}`)}::-moz-progress-bar`
        })
      }),
      addVariant('webkit-progress-value', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`webkit-progress-value${separator}${className}`)}::-webkit-progress-value`
        })
      }),
      addVariant('webkit-progress-bar', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`webkit-progress-bar${separator}${className}`)}::-webkit-progress-bar`
        })
      })
    })
  ],
}
