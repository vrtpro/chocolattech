export const _initHead = () => {
    useHead({
        titleTemplate: titleChunk => {
            return titleChunk ? `${titleChunk} | Choco Berry website` : `Choco Berry website`;
        },
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            { name: 'description', content: 'Choco Berry website with Nuxt 3' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Choco Berry' },
        ],
    });
};
