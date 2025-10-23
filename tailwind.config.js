import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui",
    }),
  ],
}
