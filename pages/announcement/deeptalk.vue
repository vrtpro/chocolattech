<script setup lang="ts">
useHead({
    title: 'Deep Talk',
});
</script>

<template>
    <FullScreenCard class="h-auto bg-red-400 text-chocolate-800">
        <h1 class="text-2xl font-bold"><Icon name="flat-color-icons:high-priority" /> Deep Talk</h1>
        <div class="my-2 text-sm">
            <Icon name="ic:outline-access-time" /> April 05, 2023
            <Icon name="material-symbols:folder-open-outline" /> Announcement <Icon name="mdi:user-circle-outline" />
            <NuxtLink to="/dev" class="underline text-teal-600"> Falcxxdev</NuxtLink>
        </div>
        <p class="text-md">
            Yesterday, Choco is doing
            <a class="sl" target="_blank" href="https://www.youtube.com/live/wC8dY7mMISM">live on YouTube</a> and come
            back from her "hiatus" state. She is doing deep talk and telling about what happens to her recently and
            explains why is she often dissapears, hard to contact, etc.
            <br />
            <br />
            Here is what I get from the stream.
        </p>
        <h3 class="text-xl font-semibold my-2">1. Laggy internet speed</h3>
        <p class="text-md mb-2">
            You may agree if this problem exist. Since Choco doing
            <a class="sl" target="_blank" href="https://www.youtube.com/live/7IS9E19ocuY">her 2nd debutante</a>, she
            often suffers lag and buffering while streaming. That's not from the viewers-side, but it's from her OBS or
            her internet speed. People who watch the entire stream from
            <a class="sl" target="_blank" href="https://www.youtube.com/live/7IS9E19ocuY">her 2nd debutante</a> stream
            until now, might be know this problem appears frequently.
        </p>
        <h3 class="text-xl font-semibold my-2">2. Being a victim of fraud from a transaction</h3>
        <p class="text-md mb-2">
            This section would be very-long, I will wrap up the main point.
            <br />
            She and her family is recently buying a home. She already pay for it and the home seller tricked her. We all
            doesn't know how much it takes, but it would be a large-amount. She is currently confused and survive.
            <a class="sl" target="_blank" href="https://www.youtube.com/live/wC8dY7mMISM">Just watch the stream</a> if
            you missed, you will know the actual information.
        </p>
        <h3 class="text-xl font-semibold my-2">3. Dramatic things on campus</h3>
        <p class="text-md mb-2">
            She says there is a problem at her campus. At first, it was a personal problem, but it turned into a big
            problem. This wasn't her problem, she is doing good. Now she is not continuing her studies because the
            campus is closed. Now she is doing WFH (Work-from-home) system.
        </p>

        <p class="text-md my-4">
            These problems are super-complicated. No one even can help her in-action. This is her problematics and we
            only can help her by support.
        </p>
        <p class="text-md font-semibold my-4">
            I am here to invite you guys as readers to help by supporting her from afar, wherever you guys at. You can
            either supporting her with donating to help her fullifying her needs or supporting by cheering her.
            <br />
            Let's avoid her from <span class="text-red-500">The Unwanted Day : Graduation</span>. We are hoping
            everything goes smoothly and she can back doing streaming activity normally.
            <br />
            <br />
            Thanks for reading these announcements.
        </p>
        <Button class="w-full lg:w-80" name="Send a donation" icon="bxs:donate-heart" dest="/donation" />
        <a
            href="https://discord.gg/cVmy5bTaTs"
            target="_blank"
            rel="noreferrer nofollow me"
            class="button w-full lg:w-96 mt-2 lg:ml-2 lg:mt-0"
        >
            <Icon name="ic:baseline-discord" class="block flex-grow-0 shrink-0" width="32" height="32" />
            <span class="flex-grow flex-shrink text-left w-full">Join Discord & Cheer her up</span>
        </a>
    </FullScreenCard>
</template>

<style type="text/tailwindcss" scoped>
a.sl {
    @apply text-violet-600 underline;
}
</style>
