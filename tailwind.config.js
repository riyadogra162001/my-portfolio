// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           '0%,100%': {
//             transform: 'translateY(0px)',
//           },
//           '50%': {
//             transform: 'translateY(-12px)',
//           },
//         },

//         fadeUp: {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(50px)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)',
//           },
//         },

//         fadeLeft: {
//           '0%': {
//             opacity: '0',
//             transform: 'translateX(-40px)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateX(0)',
//           },
//         },

//         fadeRight: {
//           '0%': {
//             opacity: '0',
//             transform: 'translateX(40px)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateX(0)',
//           },
//         },

//         pulseGlow: {
//           '0%,100%': {
//             boxShadow: '0 0 0px #8b5cf6',
//           },
//           '50%': {
//             boxShadow: '0 0 25px rgba(139,92,246,.7)',
//           },
//         },

//         gradient: {
//           '0%,100%': {
//             backgroundPosition: '0% 50%',
//           },
//           '50%': {
//             backgroundPosition: '100% 50%',
//           },
//         },

//         wiggleSlow: {
//           '0%,100%': {
//             transform: 'rotate(-2deg)',
//           },
//           '50%': {
//             transform: 'rotate(2deg)',
//           },
//         },

//         zoomIn: {
//           '0%': {
//             opacity: '0',
//             transform: 'scale(.8)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'scale(1)',
//           },
//         },
//       },

//       animation: {
//         float: 'float 5s ease-in-out infinite',
//         fadeUp: 'fadeUp .9s ease forwards',
//         fadeLeft: 'fadeLeft .8s ease forwards',
//         fadeRight: 'fadeRight .9s ease forwards',
//         glow: 'pulseGlow 2s infinite',
//         gradient: 'gradient 5s ease infinite',
//         wiggleSlow: 'wiggleSlow 6s ease-in-out infinite',
//         zoomIn: 'zoomIn .8s ease forwards',
//       },
//     },
//   },

//   plugins: [],
// }