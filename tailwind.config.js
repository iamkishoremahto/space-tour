/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'home-desktop':"url('/assets/home/background-home-desktop.jpg')",
      'home-mobile':"url('/assets/home/background-home-mobile.jpg')",
      'home-tablet':"url('/assets/home/background-home-tablet.jpg')",
      'destination-desktop':"url('/assets/destination/background-destination-desktop.jpg')",
      'destination-mobile':"url('/assets/destination/background-destination-mobile.jpg')",
      'destination-tablet':"url('/assets/destination/background-destination-tablet.jpg')",
      'crew-desktop':"url('/assets/crew/background-crew-desktop.jpg')",
      'crew-mobile':"url('/assets/crew/background-crew-mobile.jpg')",
      'crew-tablet':"url('/assets/crew/background-crew-tablet.jpg')",
      'technology-desktop':"url('/assets/technology/background-technology-desktop.jpg')",
      'technology-mobile':"url('/assets/technology/background-technology-mobile.jpg')",
      'technology-tablet':"url('/assets/technology/background-technology-tablet.jpg')",
      'technology-tablet-vehicle-portrait':"url('/assets/technology/image-launch-vehicle-portrait.jpg')",
      'technology-tablet-vehicle-landscape':"url('/assets/technology/image-launch-vehicle-landscape.jpg')",
      'technology-tablet-capsule-landscape':"url('/assets/technology/image-space-capsule-landscape.jpg')",
      'technology-tablet-capsule-portrait':"url('/assets/technology/image-space-capsule-portrait.jpg')",
      'technology-tablet-spaceport-portrait':"url('/assets/technology/image-spaceport-portrait.jpg')",
      'technology-tablet-spaceport-landscape':"url('/assets/technology/image-spaceport-landscape.jpg')",
      
    },
    fontFamily: {
      "Barlow":["Barlow Condensed","sans-serif"]
    },
    extend: {},
    animation: {
      'spin-slow': 'spin 100s linear infinite',
    }
  },
  plugins: [],
}

