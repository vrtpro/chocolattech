export const _initHead = () => {
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
                    'Choco Latte (チョコラテ) is a female Indonesian VTuber under Tsukimi Project, debutting as part of its second generation',
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Choco Latte チョコラテ' },
            { name: 'publisher', content: 'Falcxxdev' },
            { name: 'theme-color', content: '#ff93b5' },
            { name: 'robots', content: 'index,follow' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:title', content: 'Choco Latte VTuber' },
            {
                name: 'og:description',
                content:
                    'Choco Latte (チョコラテ) is a female Indonesian VTuber under Tsukimi Project, debutting as part of its second generation',
            },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: 'Choco Latte チョコラテ' },
            { name: 'og:url', content: 'https://chocolatte.falcxxdev.cyou' },
            { name: 'og:image', content: 'https://cdn.upload.systems/uploads/HsN1ucP5.png' },
            { name: 'og:image:type', content: 'image/png' },
            { name: 'og:image:width', content: '1200' },
            { name: 'og:image:height', content: '600' },
            // Twitter
            { name: 'twitter:title', content: 'Choco Latte VTuber' },
            {
                name: 'twitter:description',
                content:
                    'Choco Latte (チョコラテ) is a female Indonesian VTuber under Tsukimi Project, debutting as part of its second generation',
            },
            { name: 'twitter:image', content: 'https://cdn.upload.systems/uploads/HsN1ucP5.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@ChocoLatteCh_' },
            { name: 'twitter:creator', content: '@falcxxdev' },
        ],
        link: [
            { rel: 'icon', href: '/svgs/icon.svg', type: 'image/svg+xml' },
            { rel: 'canonical', href: 'https://chocolatte.falcxxdev.cyou' },
            { rel: 'preload', href: '/img/signature.webp', as: 'image' },
            { rel: 'preload', href: '/img/neko_half.webp', as: 'image' },
        ],
        script: [
            {
                async: true,
                defer: true,
                'data-website-id': '26760278-a6e3-4f8a-b5fd-fb8e01427806',
                src: 'https://umami.falcxxdev.cyou/umami.js',
            },
        ],
    });
};
