/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      colors: {
        /* Channel-triplet vars + <alpha-value> make /opacity modifiers compile.
           NOTE: surface/card/muted are a TOP-LEVEL family so the site's
           vocabulary (bg-surface, bg-surface-card, bg-surface-muted) exists. */
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          card: "rgb(var(--surface-card) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--text) / <alpha-value>)",
          muted: "rgb(var(--muted) / <alpha-value>)",
          faint: "rgb(var(--faint) / <alpha-value>)",
        },
        brand: {
          green: "rgb(var(--accent-primary) / <alpha-value>)",
          jade: "rgb(var(--accent-jade) / <alpha-value>)",
          ink: "rgb(var(--brand-ink) / <alpha-value>)",
          vermillion: "rgb(var(--accent-warm) / <alpha-value>)",
        },
        luminous: {
          DEFAULT: "rgb(var(--accent-luminous) / <alpha-value>)",
          soft: "rgb(var(--accent-luminous-soft) / <alpha-value>)",
        },
        night: {
          DEFAULT: "rgb(var(--night) / <alpha-value>)",
          panel: "rgb(var(--night-panel) / <alpha-value>)",
          raise: "rgb(var(--night-raise) / <alpha-value>)",
          line: "rgb(var(--night-line) / <alpha-value>)",
          "line-strong": "rgb(var(--night-line-strong) / <alpha-value>)",
          mist: "rgb(var(--night-mist) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        editorial: "-0.03em",
      },
      lineHeight: {
        editorial: "1.08",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
