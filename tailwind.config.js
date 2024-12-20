export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        green: {
          DEFAULT: 'var(--green)',
        },
        red: {
          DEFAULT: 'var(--red)',
        },
        orange: {
          DEFAULT: 'var(--orange)',
        },
        blue: {
          DEFAULT: 'var(--blue)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        outline: {
          DEFAULT: 'var(--outline)',
          foreground: 'var(--outline-foreground)',
          hover: 'var(--outline-hover)',
        },
        selected: {
          DEFAULT: 'var(--selected)',
          foreground: 'var(--selected-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
      },
      boxShadow: {
        lg: '0 2px 15px rgba(0, 0, 0, 0.05)',
        md: '0 2px 30px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        single: 'single 0.6s linear infinite',
        double: 'double 0.6s linear infinite',
        'slide-background': 'slideBackground 1s ease infinite',
      },
      keyframes: {
        single: {
          '0%': { transform: 'translateY(3px)' },
          '50%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(3px)' },
        },
        double: {
          '0%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(3px)' },
          '100%': { transform: 'translateY(-3px)' },
        },
        slideBackground: {
          '0%': {
            backgroundPosition: 'left -40px top 0',
          },
          '100%': {
            backgroundPosition: 'right -40px top 0',
          },
        },
      },
    },
  },
  plugins: [],
};
