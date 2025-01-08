/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "media400": "440px",
        "media580": "580px",
        "media1200": "1200px",
      },
      backgroundImage: {
        'testimonial-section': "url('/images/miguel-a-amutio-QDv-uBc-poY-unsplash 1.png')"
      }
    },
  },
  plugins: [],
}

