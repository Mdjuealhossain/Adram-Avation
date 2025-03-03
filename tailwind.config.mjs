/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/widget/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["var(--font-poppins)", "sans-serif"],
            },
            colors: {
                balck: "#000000",
                white: "#ffffff",
                primary: "#5D6974",
                secondary: "#3a4856",
                default: "#ebf0f4",
                paper: "",
                warning_light: "",
                warning_main: "#fdcc02",
                info_deep_light: "rgba(153, 194, 255, .322)",
                info_extra_light: "rgba(0, 2, 110, .12)",
                info_light: "#728db6",
                info_main: "#00026e",
                info_dark: "",
                info_deep: "",
                info_footer: "",
                disable: "",
                gray_600: "#",
                gray_500: "#",
                gray_300: "#",
                divider: "rgba(34, 41, 47, .05)",
                divider_2: "#dbdde0",
            },
            boxShadow: {
                menu: "0 5px 25px rgba(34, 41, 47, .1)",
                service: "0 20px 100px 10px rgba(24, 33, 77, .05)",
                tabs: "0 4px 10px rgba(0, 117, 255, .09)",
            },
            fontSize: {
                xxs: ".5rem", // 8px
                xs: "0.75rem", //"12px",
                sm: "0.875rem", //14px",
                base: "1rem", //"16px",
                lg: "1.125rem", //"18px",
                xl: "1.25rem", //"20px",
                "2xl": "1.5rem", //"24px",
                "3xl": "1.625rem", // 26px
                "4xl": "1.75rem", //"28px",
                "5xl": "2rem", // "32px",
                "6xl": "2.25rem", //"36px",
            },
            maxWidth: {
                "2xl": "1140px",
            },
        },
    },

    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                ".text-H1": {
                    fontSize: theme("fontSize.3xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.4xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.3xl"), // Biggest screen
                    },
                },
                ".text-H2": {
                    fontSize: theme("fontSize.2xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.3xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.2xl"), // Biggest screen
                    },
                },
                ".text-H3": {
                    fontSize: theme("fontSize.xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.2xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xl"), // Biggest screen
                    },
                },
                ".text-H4": {
                    fontSize: theme("fontSize.lg"),

                    "@screen md": {
                        fontSize: theme("fontSize.xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.lg"), // Biggest screen
                    },
                },

                ".text-subtitle1": {
                    fontSize: theme("fontSize.xs"),

                    "@screen md": {
                        fontSize: theme("fontSize.sm"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.base"), // Biggest screen
                    },
                },

                ".text-body1": {
                    fontSize: theme("fontSize.xs"),

                    "@screen 2xl": {
                        fontSize: theme("fontSize.sm"), // Biggest screen
                    },
                },
                ".text-body2": {
                    fontSize: theme("fontSize.xs"),
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xs"), // Large screen
                    },
                },
                ".text-caption": {
                    fontSize: theme("fontSize.xxs"),
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xxs"), // Large screen
                    },
                },
            });
        },
    ],
};
