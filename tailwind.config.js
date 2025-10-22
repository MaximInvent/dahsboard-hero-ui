import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dashboard UI Colors - Updated to match screenshots
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#007bff', // Main primary blue
          600: '#0056b3',
          700: '#004085',
          800: '#002a5c',
          900: '#001a3a',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d', // Main secondary gray
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#171717',
        },
        success: {
          50: '#d4edda',
          100: '#c3e6cb',
          200: '#91d5a3',
          300: '#5cb85c',
          400: '#28a745', // Main success green
          500: '#28a745',
          600: '#218838',
          700: '#1e7e34',
          800: '#1c7430',
          900: '#155724',
        },
        warning: {
          50: '#fff3cd',
          100: '#ffeaa7',
          200: '#fdcb6e',
          300: '#fdcb6e',
          400: '#ffc107', // Main warning yellow
          500: '#ffc107',
          600: '#e0a800',
          700: '#d39e00',
          800: '#c69500',
          900: '#b7791f',
        },
        danger: {
          50: '#f8d7da',
          100: '#f5c6cb',
          200: '#f1b0b7',
          300: '#ec9ca3',
          400: '#e87980',
          500: '#dc3545', // Main danger red
          600: '#c82333',
          700: '#bd2130',
          800: '#b21f2d',
          900: '#a71e2a',
        },
        info: {
          50: '#cfe2ff',
          100: '#b3d7ff',
          200: '#80bfff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0d6efd', // Main info blue
          600: '#0b5ed7',
          700: '#0a58ca',
          800: '#084298',
          900: '#052c65',
        },
        // Neutral palette - Updated to match screenshots
        neutral: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#171717',
        },
        // Custom dark blue palette
        darkblue: {
          50: '#f0f2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#111057', // Main dark blue
          600: '#0e0d4a',
          700: '#0b0a3d',
          800: '#080730',
          900: '#050423',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
