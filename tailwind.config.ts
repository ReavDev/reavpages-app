/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss"

const config: Config = {
 darkMode: ["class"],
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    brand: {
     bodyText: "var(--brand-bodyText)",
     inputText: "var(--brand-inputText)",
     bgPrimary: "var(--brand-bgPrimary)",
     primary: "var(--brand-primary)",
     primaryHover: "var(--brand-primary-hover)",
     textDark: "var(--brand-textDark)",
     inputLabel: "var(--brand-inputLabel)",
     placeholder: "var(--brand-placeholder)",
     textLight: "var(--brand-textLight)",
     border: "var(--brand-border)",
    },
   },

   borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
   },
   fontFamily: {
    jaka: [`var(--font-jakarta)`, "sans-serif"],
   },
  },
 },
 plugins: [require("tailwindcss-animate")],
}
export default config
