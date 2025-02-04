/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animated";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainTextColor: "#2F2F68",
                mainBgBlue: "#2E68FF",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};
