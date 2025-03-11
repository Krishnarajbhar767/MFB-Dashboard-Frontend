/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animated";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainTextColor: "#2F2F68",
                mainBgBlue: "#2E68FF",
                primary: "#1e40af",
                foreground: "#111827",
                "muted-foreground": "#6B7280",
                "primary-foreground": "#FFFFFF",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};
