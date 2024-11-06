/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 25s linear infinite',
      },
    },
    screens: {
      xs: { max: '479px' }, 
      sm: '640px',          
      md: '768px',
      lg: '1024px',
      xl: '1280px',
     },
  },
  plugins: [],
}
