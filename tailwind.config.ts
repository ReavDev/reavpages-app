/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          bodyText: '#767676',
          inputText: '#676767', // For input field text
          bgPrimary: '#FEFEFE', // Primary background color
          primary: '#7102CE', // Primary brand color
          textDark: '#4B4B4B', // Dark grey text
          inputLabel: '#4B4B4B', // Input label color
          placeholder: '#B1B1B1', // Placeholder text color
          textLight: '#B1B1B1', // Light grey text
          border: '#DEDEDE', // Border color for inputs
        },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        jaka: [`var(--font-jakarta)`, 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
