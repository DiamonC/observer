/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=dark]"
                    ],
                    primary: "#088385",
                    secondary: "#cc4304",
                     "accent": "#1f242d",
                     "base-100": "#2A303C",
                },
                light: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=light]"
                    ],
                    "primary": "#088385",
                    "secondary": "#cc4304",
                    "base-100": "#798091",
                    "accent": "#e5e6e6",
                },
            },
        ],
    },
}
