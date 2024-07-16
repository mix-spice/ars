/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  // Extra small devices like small phones
        'xs': '475px',   // Small devices (landscape phones, 475px and up)
        'sm': '640px',   // Standard small devices (small tablets and large smartphones, landscape view)
        'md': '900px',   // Medium devices (tablets with a portrait width)
        'lg': '900px',  // Large devices (laptops/desktops, 1024px and up)
        'xl': '1280px',  // Extra large devices (large laptops and desktops, 1280px and up)
        '2xl': '1536px', // Very large devices (larger desktops, 1536px and up)
        'xxl': '2560px', // Extremely large screens
      },
      maxWidth: {
        'custom': '300px',  // Custom max-width, useful for specific design elements
      },
    },
  },
  plugins: [],
}