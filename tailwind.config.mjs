import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      sans: ["var(--font-urbanist)", "system-ui", "sans-serif"],
      noto: ["var(--font-noto)", "system-ui", "sans-serif"],
    },

    screens: {
      xl: { max: "1920px" },
      "min-xl": { min: "1921px" },
      laptop: { max: "1535px" },
      "min-laptop": { min: "1536px" },
      tablet: { max: "1023px" },
      "min-tablet": { min: "1024px" },
      mobile: { max: "767px" },
      "min-mobile": { min: "768px" },
      xs: { max: "319px" },
      "min-xs": { min: "320px" },
    },

    extend: {
      colors: {
        black: "#020617",
        primary: {
          DEFAULT: "#3b82f6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
