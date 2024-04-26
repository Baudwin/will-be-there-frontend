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

/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     fontFamily: {
//       lt: ["Hind Guntur Light", "sans-serif"],
//       reg: ["Hind Guntur", "sans-serif"],
//       medi: ["Hind Guntur Medium", "sans-serif"],
//       bld: ["Hind Guntur Bold", "sans-serif"],
//       smbld: ["Hind Guntur SemiBold", "sans-serif"],
//     },
//     extend: {
//       container: {
//         center: true,
//         screens: {
//           lg: "1024px",
//           xl: "1024px",
//         },
//       },
//       screens: {
//         sm: {min: "320px", max: "599px"},

//         md: {min: "600px", max: "1023px"},

//         lg: {min: "1024px", max: "1581px"},

//         xl: {min: "1280px", max: "1535px"},

//         "2xl": {min: "1536px"},
//       },
//     },
//   },
//   plugins: [],
// };

