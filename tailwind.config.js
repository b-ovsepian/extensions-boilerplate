/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  daisyui: {
    themes: ["light", "dark", "cyberpunk"],
  },
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        proxima: ['"SpaceGrotesk"', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "1.5rem",
        },
      },
      zIndex: {
        "-1": "-1",
        100: "100",
      },
      colors: {
        default: "#FFFFFF",
        body: "#FFFFFF",
        card: "#F0F0F1",
        system: "#0F0F0F",
        // row: "#E7E7E9",
        // line: "#E4E4E9",
        primary: "#FF498B",
        secondary: "#535257",
        // "secondary-light": "#6D6D6D",
        // "secondary-lighter": "#7D7C81",
        // "secondary-dark": "#3C3C3E",
        // "secondary-darker": "#323134",
        // yellow: "#F2B108",
        // orange: "#E57D35",
        // rose: "#E63787",
        // pink: "#FE7EF1",
        // cyan: "#6EC4FF",
        // red: "#E9383D",
        // violet: "#7466DB",
        // gray: "#D2D2DA",
        // "gray-light": "#DBDBE1",
        // "gray-lighter": "#E4E4E9",
        // "gray-dark": "#B9B9C3",
        // "gray-darker": "#A0A0A9",
        // green: "#35BA4B",
        // "green-dark": "#30A744",
      },
      textColor: (theme) => ({ ...theme("colors") }),
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "ping-slow": "ping 2s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
    screens: {
      sm: "480px",
      md: "640px",
      "2md": "768.98px",
      lg: "1024px",
      xl: "1320px",
      "lg-max": { max: "1319.98px" },
      "md-max": { max: "1023.98px" },
      "2sm-max": { max: "768.98px" },
      "sm-max": { max: "639.98px" },
      "xs-max": { max: "479.98px" },
      "xxs-max": { max: "399.98px" },
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: `rgb(var(--color-system-default))`,
          maxWidth: "171rem",
          strong: {
            color: `rgb(var(--color-system-lighter))`,
          },
          a: {
            color: theme("colors.primary.DEFAULT"),
            textDecoration: "none",
            "&:hover": {
              color: theme("colors.primary.dark"),
            },
          },
          p: { color: `rgb(var(--color-system-default))` },
          h2: {
            color: theme("colors.default"),
            fontSize: theme("fontSize.3xl"),
          },
          h3: {
            color: theme("colors.default"),
            fontSize: theme("fontSize.2xl"),
          },
          h4: {
            color: theme("colors.default"),
            fontSize: theme("fontSize.xl"),
          },
          h5: {
            color: theme("colors.default"),
            fontSize: theme("fontSize.base"),
          },
          h6: { color: theme("colors.default") },
          blockquote: {
            color: theme("colors.default"),
            fontStyle: "normal",
            fontWeight: "normal",
          },
          picture: {
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          },
          img: {
            cursor: "zoom-in",
            marginTop: "0rem",
            marginBottom: "0rem",
          },
        },
      },
    }),
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
}
