export const _initHead = () => {
    useHead({
        titleTemplate: titleChunk => {
            return titleChunk ? `${titleChunk} | Choco Latte チョコラテ` : `Choco Latte チョコラテ`;
        },
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            style: 'height: 100vh;',
        },
        meta: [
            // General tags
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            { name: 'description', content: 'Choco Latte website with Nuxt 3' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Choco Latte チョコラテ' },
            { name: 'publisher', content: 'Falcxxdev' },
            { name: 'theme-color', content: '#ff93b5' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:title', content: 'Choco Latte チョコラテ' },
            { name: 'og:description', content: 'Choco Latte website with Nuxt 3' },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: 'Choco Latte チョコラテ' },
            { name: 'og:url', content: 'https://chocolatte.falcxxdev.ml' },
            { name: 'og:image', content: 'https://cdn.upload.systems/uploads/WGSwMwTM.png' },
            { name: 'og:image:type', content: 'image/png' },
            { name: 'og:image:width', content: '1200' },
            { name: 'og:image:height', content: '600' },
            // Twitter
            { name: 'twitter:title', content: 'Choco Latte チョコラテ' },
            { name: 'twitter:description', content: 'Choco Latte website with Nuxt 3' },
            { name: 'twitter:image', content: 'https://cdn.upload.systems/uploads/WGSwMwTM.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@ChocoLatteCh_' },
            { name: 'twitter:creator', content: '@falcxxdev' },
        ],
        link: [
            { rel: 'icon', href: '/svgs/icon.svg', type: 'image/svg+xml' },
            { rel: 'canonical', href: 'https://chocolatte.falcxxdev.ml' },
            { rel: 'preload', href: '/img/bg.webp', as: 'image' },
            { rel: 'preload', href: '/img/neko_half.webp', as: 'image' },
        ],
    });
};
