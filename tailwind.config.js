/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        darkslateblue: "#06286e",
        dimgray: "#696671",
        white: "#fff",
        darkslategray: {
          "100": "#3a3740",
          "200": "#202b37",
        },
        dodgerblue: "#217eec",
        gray: "#28262c",
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        med: "Inter",
        lato: "Lato",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "13xl": "32px",
        "23xl-5": "42.5px",
        xl: "20px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
