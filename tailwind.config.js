/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      h1: ['8rem', { lineHeight: '10rem'}],
      h2: ['5rem', { lineHeight: '6.75rem'}],
      h3: ['4rem', { lineHeight: '5.5rem'}],
      h4: ['3rem', { lineHeight: '3.99rem'}],
      h5: ['2.25rem', { lineHeight: '2.99rem'}],
      h6: ['1.625rem', { lineHeight: '1.99rem'}],
      'body-1': ['1.5rem', { lineHeight: '2.5rem'}],
      'body-2': ['1.25rem', { lineHeight: '2rem'}],
      caption: ['1.125rem', { lineHeight: '1.88rem'}],
      label: ['1rem', { lineHeight: '1.5rem'}],
      link: ['1.5rem', { lineHeight: '2.5rem'}],
    },
    screens: {
      'iphone': { 'max': '414px' },
      'ipad': { 'max': '768px', 'min': '768px' },
      'ipad-air': { 'max': '820px', 'min': '820px' },
    },
  },
  plugins: [],
}