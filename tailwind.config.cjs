/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
                noto_jp: ['Noto Sans JP', 'sans-serif'],
            },
            colors: {
                'chocolate-500': '#A69797',
                'chocolate-600': '#857171',
                'chocolate-700': '#665A5A',
                'chocolate-800': '#6E5050',
            },
        },
    },
    plugins: [],
};
