// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    builder: 'vite',
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
});
