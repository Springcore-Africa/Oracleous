
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {
//       fonFamily:{
//         'custom':["Playwrite FR Moderne", 'cursive'],
//         'new': ["Oswald", 'sans-serif']
//       }
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fonFamily:{
        'custom':["Playwrite FR Moderne", 'cursive'],
        'new': ["Oswald", 'sans-serif']
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};