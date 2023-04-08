/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#FFFFFF',
      secondary: '#F3F4F6',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#1F2937',
      secondary: '#6B7280',
      subtitle: '#4B5563',
      accent: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      success: '#22C55E',
    }),
    extend: {
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
    plugins: [],
  },
}
