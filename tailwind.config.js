/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}"],
  theme: {
    extend: {
      container: {
        center: true, // Ortalanmış container
        padding: '2rem', // Daxili padding əlavə et
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}

