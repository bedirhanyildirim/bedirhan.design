import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'upwork': '#6fda44',
        'linkedin': '#0077b5'
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
export default config
