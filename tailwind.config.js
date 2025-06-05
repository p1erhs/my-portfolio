/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF",
                accent: "#2563EB",
                neutral: "#F3F4F6",
                dark: "#111827",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
