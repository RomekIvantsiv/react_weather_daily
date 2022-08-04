/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // extend: {},
    screens: {
      phonexs: '320px',
      phone370: '370px',
      phone: '430px',
      tablet: '500px',
      tablet550: '550px',
      tablet600: '600px',
      tablet700: '700px',
    },
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
