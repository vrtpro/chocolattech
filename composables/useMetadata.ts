export const useWebMeta = () => {
    useHead({
        titleTemplate: titleChunk => {
            return titleChunk ? `${titleChunk} | Choco Latte VTuber` : `Choco Latte VTuber`;
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
            {
                name: 'description',
                content:
                    'Choco Latte (チョコラテ) is a independent female Indonesian VTuber, formerly associated with Tsukimi Project',
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Choco Latte チョコラテ' },
            { name: 'publisher', content: 'Azukashiic' },
            { name: 'theme-color', content: '#ff93b5' },
            { name: 'robots', content: 'index,follow' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:title', content: 'Choco Latte VTuber' },
            {
                name: 'og:description',
                content:
                    'Choco Latte (チョコラテ) is a independent female Indonesian VTuber, formerly associated with Tsukimi Project',
            },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: 'Choco Latte チョコラテ' },
            { name: 'og:url', content: 'https://choco.hoshiro.space' },
            { name: 'og:image', content: 'http://cdn.hoshiro.space/choco/graph.png' },
            { name: 'og:image:type', content: 'image/png' },
            { name: 'og:image:width', content: '1200' },
            { name: 'og:image:height', content: '600' },
            // Twitter
            { name: 'twitter:title', content: 'Choco Latte VTuber' },
            {
                name: 'twitter:description',
                content:
                    'Choco Latte (チョコラテ) is a independent female Indonesian VTuber, formerly associated with Tsukimi Project',
            },
            { name: 'twitter:image', content: 'http://cdn.hoshiro.space/choco/graph.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@ChocoLatteCh_' },
            { name: 'twitter:creator', content: '@azukashiic' },
        ],
        link: [
            { rel: 'icon', href: '/svgs/icon.svg', type: 'image/svg+xml' },
            { rel: 'canonical', href: 'https://choco.hoshiro.space' },
            { rel: 'preload', href: '/img/signature.webp', as: 'image' },
            { rel: 'preload', href: '/img/neko_half.webp', as: 'image' },
        ],
        script: [
            {
                async: true,
                'data-website-id': 'ff027c74-3390-419b-becd-344bed766c7e',
                src: 'https://umami.falcxxdev.fun/script.js',
            },
        ],
    });
};
