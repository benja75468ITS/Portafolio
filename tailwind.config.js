/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0B0D',
          panel: '#121215',
          border: 'rgba(255, 255, 255, 0.1)',
          borderHover: 'rgba(255, 255, 255, 0.25)',
          red: '#E61919',
          muted: '#808080',
        }
      },
      fontFamily: {
        condensed: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Space Grotesk"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'widest-xl': '0.2em',
      }
    },
  },
  plugins: [],
}
