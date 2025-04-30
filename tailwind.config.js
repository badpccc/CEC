// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // ou seu caminho de arquivos
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-violet': {
          '50': '#fbf5ff',
          '100': '#f5e7ff',
          '200': '#edd3ff',
          '300': '#dfb1ff',
          '400': '#cc80ff',
          '500': '#b84ffd',
          '600': '#a020f0',
          '700': '#8f1cd4',
          '800': '#781cad',
          '900': '#62188b',
          '950': '#440467',
        },
      },
    },
  },
  plugins: [],
}
