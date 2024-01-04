/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        jet: "hsl(0, 0%, 22%)",
        onyx: "hsl(240, 1%, 17%)",
        "eerie-black-1": "hsl(240, 2%, 13%)",
        "eerie-black-2": "hsl(240, 2%, 12%)",
        "smoky-black": "hsl(0, 0%, 7%)",
        "white-1": "hsl(0, 0%, 100%)",
        "white-2": "hsl(0, 0%, 98%)",
        "orange-yellow-crayola": "hsl(45, 100%, 72%)",
        "vegas-gold": "hsl(45, 54%, 58%)",
        "light-gray": "hsl(0, 0%, 84%)",
        "light-gray-70": "hsla(0, 0%, 84%, 0.7)",
        "bittersweet-shimmer": "hsl(0, 43%, 51%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
