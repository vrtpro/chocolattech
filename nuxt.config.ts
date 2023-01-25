// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    builder: 'vite',
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    imports: {
        dirs: ['./composables', './components', './scripts', './utils'],
    },
});
