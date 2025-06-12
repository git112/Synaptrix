/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0D0F',
        'secondary-bg': '#14171A',
        'primary-gradient-start': '#6E00FF',
        'primary-gradient-end': '#00FFE0',
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
        'accent-glow': '#A855F7',
        border: '#2C2F33',
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6E00FF, #00FFE0)',
      },
    },
  },
  plugins: [],
}
