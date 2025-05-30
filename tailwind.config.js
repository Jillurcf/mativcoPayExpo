// // const plugin = require('tailwindcss/plugin');
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     // NOTE: Update this to include the paths to all of your component files.
//     content: [
//       './App.{js,jsx,ts,tsx}',
//       './src/**/*.{js,jsx,ts,tsx}',
//     ],
//     // presets: [require("nativewind/preset")],
//     theme: {
//       extend: {
//         fontFamily: {
//           // Roboto
//           RoboNormal: 'Roboto-Regular',
//           RoboMedium: 'Roboto-Medium',
//           RoboBold: 'Roboto-Bold',
//         },
  
//         colors: {
//           primary: '#FFFFFF',
//           PrimaryFocus: "#FFFFFF33",
//           whiteBtnText: "#141316",
//           title: '#272727',
//           subT: '#5e5e5e',
//           offWhite: '#E6ECEC',
//           secondary: '#F4FAFA',
//           white100: '#EFEFEF',
//           border: '#DFDFDF',
//           primary100: '#EEF6F6',
//           primary200: '#9BB3B5',
//           danger: '#CE3535',
//         },
//       },
//     },
//     plugins: [],
//   }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '300px',
      md: '400px',
      lg: '880px',
      tablet: '1024px',
    },
    extend: {
      fontFamily: {
     
        RobotoBlack: "RobotoBlack",
        RobotoBlackItalic: "RobotoBlackItalic",
        RobotoBold: "RobotoBold",
        RobotoBoldItalic: "RobotoBoldItalic",
        RobotoItalic: "RobotoBoldItalic",
        RobotoLight: "RobotoLight",
        RobotoMedium: "RobotoLight",
        RobotoRegular: "RobotoRegular",
      },
      colors: {
        primary: '#FFFFFF',
        PrimaryFocus: "#FFFFFF33",
        whiteBtnText: "#141316",
        title: '#272727',
        subT: '#5e5e5e',
        offWhite: '#E6ECEC',
        secondary: '#F4FAFA',
        white100: '#EFEFEF',
        border: '#DFDFDF',
        primary100: '#EEF6F6',
        primary200: '#9BB3B5',
        danger: '#CE3535',
      },
    },
  },
  plugins: [],
};
