/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '290px', // Yeni kiçik ölçü üçün breakpoint
        'custom': '1000px' // Özəl breakpoint (1100px)
      },
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
