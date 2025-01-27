/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : '#020202',
        secondary : '#545454',
        badgeColor : '#FF7B02'
      },
      container : {
        center : true,
        padding : '1rem'
      },
      screens : {
        sm : '576px',
        md : '768px',
        lg : '992px',
        xl : '1200px',
        '2xl' : '1400px'
      },
      fontSize: {
         
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
