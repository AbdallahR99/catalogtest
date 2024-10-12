/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts,md}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      // primary: 'var(--primary)',
      // secondary: 'var(--secondary)',
      // red: colors.rose,
      // pink: colors.fuchsia,
    },
    extend: {},
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: '#0E60C4',
          secondary: '#FF8304',
          accent: '#43AA8B',
          neutral: '#FBF5F3',
          accent: '#43AA8B',
          neutral: '#FBF5F3',
          "base-100": '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      }
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("flowbite/plugin"), require('daisyui')],
};
