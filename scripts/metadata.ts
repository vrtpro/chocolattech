export const _initHead = () => {
    useHead({
        titleTemplate: titleChunk => {
            return titleChunk ? `${titleChunk} | Choco Latte website` : `Choco Latte website`;
        },
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            // General tags
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            { name: 'description', content: 'Choco Latte website with Nuxt 3' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Choco Latte' },
            { name: 'publisher', content: 'Falcxxdev' },
        ],
        link: [
            { rel: 'icon', href: '/svgs/icon.svg', type: 'image/svg+xml' },
            { rel: 'canonical', href: 'https://chocolatte.falcxxdev.ml' },
            { rel: 'preload', href: '/img/bg.webp', as: 'image' },
            { rel: 'preload', href: '/img/choco_with_mahjong.png', as: 'image' },
        ],
    });
};
