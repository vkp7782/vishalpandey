/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAFC",
        surface: "#FFFFFF",
        "surface-2": "#F2F3F9",
        ink: "#12141C",
        muted: "#5B6178",
        line: "#E6E8F2",

        "paper-dark": "#090B12",
        "surface-dark": "#12151F",
        "surface-2-dark": "#171B29",
        "ink-dark": "#ECEEF7",
        "muted-dark": "#8991AC",
        "line-dark": "#212639",

        accent: "#6D5DF6",
        "accent-dark": "#8C7BFF",
        accent2: "#FF5DA2",
        "accent2-dark": "#FF7AB8",
        teal: "#0EA895",
        "teal-dark": "#2FE0C7",
        amber: "#E08A00",
        "amber-dark": "#FFC24D",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(2%, 3%)" },
          "66%": { transform: "translate(-2%, -2%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 4%) scale(1.05)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 14s ease-in-out infinite",
        floatSlow: "floatSlow 18s ease-in-out infinite",
        gradientShift: "gradientShift 6s ease infinite",
        marquee: "marquee 28s linear infinite",
        pulseRing: "pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
