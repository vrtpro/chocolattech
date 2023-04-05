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
        name: 'Tsukimi Project (formerly)',
    },
}));
</script>

<template>
    <Navigation />
    <NuxtLoadingIndicator color="var(--gradient)" :throttle="0" :height="5" />
    <div class="container mx-auto p-4 font-lexend">
        <Toast>
            <h3 class="text-md font-bold"><Icon name="tabler:bell-exclamation" size="1.2em" /> Announcement</h3>
            <p class="text-sm px-6">
                Support is needed! See
                <NuxtLink to="/announcement/deeptalk" class="underline text-teal-200">this announcement</NuxtLink> for
                more information.
            </p>
        </Toast>
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
:root {
    --gradient: linear-gradient(to right, #ff0ab1, #ff002f);
}
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
