const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
    content: ["./src/**/*.js", "./src/**/**/*.js"],
  },
  theme: {
    screens: {
      xs: "550px",
      ...defaultTheme.screens,
    },
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
