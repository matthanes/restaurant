/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif"],
        roboto: ["Roboto", "ui-sans-serif"],
        montez: ["Montez", "ui-serif"],
        montaga: ["Montaga", "ui-serif"],
      },
      height: {
        'fullpage': 'calc(100vh - 9.25rem)',
      },
    },
  },
  plugins: [],
};
