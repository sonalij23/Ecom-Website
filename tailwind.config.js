/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary-color' :'#7a45ca  ',
        'secondary-color':'#845ccc ',
        'thistle' : '#DCD0FF    ',
        'charcoal-gray':'#333333',
        'primary-button':'#D9D9D9 ',
        'secondary-button':'#CCCCCC ',
        'button-hover-color':'#E6E6E6 ',
        'filter-color':' #EBEBEB'

      },
      backgroundImage: {
        'home-banner': "url('/src/images/banner.png')",
       
      },
      screens:{
        'xs': '280px',
        'sm':'500px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
          
  
      },
    },
  },
  plugins: [],
}

// 'primary-color' :'#7a45ca',
// 'secondary-color':'#845ccc',
// 'dark-orange' : '#FF5733'