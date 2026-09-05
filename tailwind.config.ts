import type { Config } from "tailwindcss";
export default {
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5F0",
        sand: "#EFE8DF",
        brown: "#332D29",
        taupe: "#8A6E59",
        accent: "#CDB79E",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
} satisfies Partial<Config>;
