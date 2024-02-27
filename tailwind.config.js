/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'phone': '360px',


        'tablet': '760px',
       
  
        'laptop': '1024px',
        
  
        'desktop': '1280px',
       
      },
      fontFamily: {
        custom: ["Playfair_Display", "serif"],
      },
    },
  },
  plugins: [],
};
