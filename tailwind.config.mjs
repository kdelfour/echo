import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

// Generated color palettes
const accent = { 200: '#e3b6ed', 600: '#a700c3', 900: '#4e0e5b', 950: '#36113e' };
const gray = { 100: '#f7f6f8', 200: '#efecf2', 300: '#c3c1c7', 400: '#8e8995', 500: '#5a5660', 700: '#3a3640', 800: '#29252e', 900: '#19171c' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
		colors: { accent, gray },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [starlightPlugin()],
};

