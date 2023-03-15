<script setup lang="ts">
_initHead();
_greet();

useJsonld((): any => ({
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Choco Latte',
    url: 'https://chocolatte.falcxxdev.cyou',
    image: 'https://chocolatte.falcxxdev.cyou/img/neko_full.webp',
    sameAs: [
        'https://twitter.com/ChocoLatte_',
        'https://instagram.com/chocolatte_',
        'https://youtube.com/@ChocoLatteCh',
        'https://www.facebook.com/ChocoLatte.Channel',
        'https://chocolatte.falcxxdev.cyou',
    ],
    jobTitle: 'Virtual YouTuber',
    gender: 'female',
    worksFor: {
        '@type': 'Organization',
        name: 'Tsukimi Project',
    },
}));
</script>

<template>
    <Navigation />
    <NuxtLoadingIndicator color="#FF6C9B" :throttle="0" :height="3" />
    <div class="container mx-auto p-4 font-lexend">
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(8px);
}
</style>
