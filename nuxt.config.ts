// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/devtools', 'nuxt-icon'],
    builder: 'vite',
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    imports: {
        dirs: ['./composables', './components', './scripts', './utils'],
    },
});
