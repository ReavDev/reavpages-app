/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
 darkMode: ['class'],
 content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   backgroundImage: {
    'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
   },
   fontFamily: {
    jaka: [`var(--font-jakarta)`, 'sans-serif'],
   },
   colors: {
    gray: {
     50: 'rgb(var(--gray-50) / 1)',
     100: 'rgb(var(--gray-100) / 1)',
     900: 'rgb(var(--gray-900) / 1)',
    },
   },
  },
 },
 plugins: [require('tailwindcss-animate')],
}
export default config
