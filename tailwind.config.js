/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lt: ["Hind Guntur Light", "sans-serif"],
      reg: ["Hind Guntur", "sans-serif"],
      medi: ["Hind Guntur Medium", "sans-serif"],
      smbld: ["Hind Guntur SemiBold", "sans-serif"],
      bld: ["Hind Guntur Bold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
