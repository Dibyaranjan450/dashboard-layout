/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tsx,jsx,ts}"],
  theme: {
    screens: {
      xs: "0px", // Extra small
      sm: "640px", // Small
      md: "768px", // Medium
      lg: "1024px", // Large
      xl: "1280px", // Extra Large
      "2xl": "1440px", // 2X Large
      "3xl": "1536px", // 3X Large
      "4xl": "1780px", // 4X Large
      "5xl": "1920px", // 5X Large (Full HD)
      "6xl": "2560px", // 6X Large (2K Screens)
      "7xl": "3200px", // 7X Large (Ultra-wide 3K)
      "8xl": "3840px", // 8X Large (4K Screens)
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      sm2: "16px",
      base: "18px",
      base2: "20px",
      lg: "24px",
      xl: "28px",
      "1xl": "32px",
      "1x2": "44px",
      "2l": "52px",
      "2xl": "64px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#036666",
        "secondary-color": "#1E3888",
        "territory-color": "#FAA916",
        "background-color": "#ffffff",
        "text-color": "#1D1D1D",
        "light-text-color": "#888888",
        "divider-color": "#E1E1E1",
        "success-color": "#4CAF50",
        "warning-color": "#FFC107",
        "error-color": "#F44336",
        "info-color": "#2196F3",
        "primary-surface": "#c6f2f2",
        "primary-surface-40": "#E8FAFA",
        "primary-surface-20": "#F4FCFC",
        "secondary-surface": "#d1e2f2",
        "secondary-surface-40": "#EDF3FA",
        "secondary-surface-20": "#F6F9FC",
        "search-border-color": "#E2E2E2",
        "progress-bg-color": "#D9D9D9",
        "primary-black": "#000000",
        "dash-text-primary": "#81B3B3",
        "info-color-primary": "#2882D6",
        "high-risk": "#F44336",
        "medium-risk": "#FF8307",
        "low-risk": "#FFC107",
        "gray-200": "#EBEBEB",
        "disabled-text": "#C3C3C3",
        "landing-content": "#9C9C9C",
      },
      boxShadow: {
        custom: "-15px 10px 30px 0px rgba(0, 0, 0, 0.10)",
        "2xl": "0px 9px 20px 0px rgba(0, 0, 0, 0.10);",
        "custom-inset": "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
      },
      backgroundImage: {
        "risk-level-gradient":
          "linear-gradient(90deg, #4CAF50 0%, #FFC107 45.5%, #F44336 100%)",
      },
      padding: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        32: "32px",
      },
      margin: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        32: "32px",
        40: "40px",
      },
      borderRadius: {
        "xs-8": "8px",
        xs: "10px",
        "xs-12": "12px",
        sm: "16px",
        md: "20px",
        lg: "43px",
        xl: "50px",
        50: "50%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* Hide scrollbar for WebKit-based browsers */
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      });
    },
  ],
};
