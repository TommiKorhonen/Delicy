module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily: {
        "bebas": ['Bebas Neue', "cursive"],
        "montserrat": ['Montserrat', "sans-serif"]
      },
      backgroundImage: theme => ({
        'hero-img': "url(../src/images/heropic.jpg)",
        'about-hero-img': "url(../src/images/about.jpg)",
        'client-card': "url(../src/images/client.jpg)",
        'stayupdated': "url(../src/images/Stay updated.jpg)",
        
      }),
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
