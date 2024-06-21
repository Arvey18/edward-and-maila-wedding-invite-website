/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FEDCC5',
        'custom-darker-pink': '#FDAD93',
        'custom-maroon': '#5A0202',
        'custom-black': '#2A2A2A',
        'custom-gray': '#EEEFF1',
        'custom-light-gray': '#FAFAFA',
        'custom-darker-gray': '#DDDDDD',
      },
      fontFamily: {
        haviland: ['Mr De Haviland', 'cursive'],
        allura: ['Allura', 'cursive'],
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [],
};
