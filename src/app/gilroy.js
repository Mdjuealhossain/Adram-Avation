import localFont from "next/font/local";

export const gilroy = localFont({
    src: [
        {
            path: "./public/fonts/Gilroy-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./public/fonts/Gilroy-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-gilroy", // Define a CSS variable for Tailwind
});
