/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss"

const config: Config = {
 darkMode: ['class'],
 content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   backgroundImage: {
    "plan-bg": "url('/assets/vector.svg')",
   },
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
    gray: {
      50: 'rgb(var(--gray-50) / 1)',
      100: 'rgb(var(--gray-100) / 1)',
      900: 'rgb(var(--gray-900) / 1)',
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
