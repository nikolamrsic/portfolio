module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
     
        'jura': ["Jura", "sans-serif"],
        
      },
      backgroundImage: {
        'hero-img': "url('Components/IMGS/bg.png')",
        'grad-img': "url('Components/IMGS/bg-grad.png')",
        
      },
    
    
    },
  },
  plugins: [],
}