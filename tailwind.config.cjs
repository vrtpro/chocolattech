/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
                noto_jp: ['Noto Sans JP', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
