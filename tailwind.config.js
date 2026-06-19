/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-green-900",
    "bg-green-800",
    "bg-green-600",
    "bg-green-500",
    "text-black",
    "border",
    "border-green-600/30",
    "bg-red-700",
    "bg-wppDark",
    "bg-wppLight",
  ],
  theme: {
    extend: {
      colors: {
        // Principais
        primaryDark: "#09095c",
        primaryLight: "#D1C094",
        secondary: "#E9E7E0",
        terciary: "#F7F6F1",
        quartenary: "#FCFCFA",
        borderImage: "#292929",

        // Copys
        corTitulosBranca: "#FFFFFF",
        corOutrosTextosBranca: "#F5F5F5",
        corTitulosPreto: " #000000",
        corOutrosTextosPreto: "#4C4C4C",

        // hex botãoColor wpp
        wppLight: "#2E7027",
        wppDark: "#2E7027",

        // classes template Novo
        mutedForeground: "#5B706A",
        accent: "#C44536",
        foreground: "#1B302B",
        border: "#E2E8E6",

        // Minitag de Seções
        minitagLightMode: "#008000",
        minitagDarkMode: "#f83607",

        // Titulos de Seções
        tituloLightMode: "#8a302e",
        tituloDarkMode: "#b7cc26",

        // Subtitulos de Seções
        subtituloLightMode: "#4d3e6b",
        subtituloDarkMode: "#8daec3",

        // Textos de Seções
        textoLightMode: "#ee6aee",
        textoDarkMode: "#2c8587",
      },
      fontFamily: {
        // mainFont: ["Playfair Display", "serif"],
        mainFont: ["Roboto", "serif"],
        Playfair: ["Playfair", "serif"],
        // mainFont: ["Poppins", "sans-serif"],
        secondFont: ["Inter", "sans-serif"],
        league: ["League Gothic"],
        barlow: ["Barlow Condensed"],
      },
      fontSize: {
        paragraph1: "0.625rem",
        paragraph2: "0.75rem",
        paragraph3: "0.875rem",
        paragraph4: "1rem",
        paragraph5: "1.125rem",
        title1: "1.25rem",
        title2: "1.375rem",
        title3: "1.5rem",
        title4: "1.875rem",
        title5: "2.25rem",
        title6: "3rem",
        title7: "3.5rem", // 55px
      },
      spacing: {
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      screens: {
        phone1: "320px",
        phone2: "375px",
        phone3: "425px",
        tablet1: "640px",
        tablet2: "768px",
        desktop1: "1024px",
        desktop2: "1280px",
        desktop3: "1440px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-5%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-5%)", opacity: "0" },
        },
        shineLoop: {
          "0%": {
            transform: "translateX(-100%) skewX(-20deg)",
          },
          "20%": {
            transform: "translateX(200%) skewX(-20deg)",
          },
          "100%": {
            transform: "translateX(200%) skewX(-20deg)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "slide-down": "slideDown 1s ease",
        "slide-up": "slideUp 1s ease",
        "shine-loop": "shineLoop 5s ease-in-out infinite",

        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
};
// export const plugins = [require("tailwindcss-gradients")];
