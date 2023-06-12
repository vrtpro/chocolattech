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
    <Modal>
        <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcatchocolattech%2Fposts%2Fpfbid0TCwCMZEUqDUjXcf4yTDE8EG3CMUQ9SmYwEoj4zCmZTqVN2vtfgyrfCxvTEHeG5FGl&show_text=true&width=380"
            width="380"
            height="430"
            style="border: none; overflow: hidden; border-radius: 0.5rem"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
    </Modal>
    <Navigation />
    <NuxtLoadingIndicator color="var(--gradient)" :throttle="0" :height="5" />
    <div class="container mx-auto p-4 font-lexend">
        <Toast>
            <h3 class="text-md font-bold"><Icon name="tabler:bell-exclamation" size="1.2em" /> ATTENTION!</h3>
            <p class="text-sm px-6">
                Choco is stopping her activity as <span class="font-black">Virtual YouTuber</span>.
                <br />
                See
                <NuxtLink
                    to="https://www.facebook.com/catchocolattech/posts/772195144406766"
                    target="_blank"
                    class="underline text-teal-200"
                    >this post</NuxtLink
                >
                for more information.
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
