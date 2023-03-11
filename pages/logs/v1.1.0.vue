<script setup lang="ts">
useHead({
    title: 'v1.1.0 Changelog',
    meta: [
        {
            name: 'description',
            content: 'Brief informations about v1.1.0 update',
        },
        // Opengraph (Facebook, Discord & average SNS)
        { name: 'og:title', content: 'v1.1.0 Changelogs | Choco Latte VTuber' },
        {
            name: 'og:description',
            content: 'Brief informations about v1.1.0 update',
        },
        { name: 'og:image', content: 'https://cdn.upload.systems/uploads/gmkIV3x2.png' },
        { name: 'og:image:type', content: 'image/png' },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '600' },
    ],
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2 lg:py-9">
            <h1 class="text-3xl text-chocolate-700 text-center font-bold">v1.1.0 Changelog (Current)</h1>
            <h2 class="text-lg text-chocolate-600 font-bold my-2">Features</h2>
            <ul class="list-disc text-chocolate-700 mx-5">
                <li class="font-semibold">Added website into some Search Engines Result</li>
                <p class="text-md">
                    Say Hi to Google, Bing, Duckduckgo, and other search engines! Now this website is available on some
                    Search Engines! You can start typing "Choco Latte VTuber" on Google and find up this website!
                </p>
                <li class="font-semibold">Process website usage data with Umami Analytics</li>
                <p class="text-md">
                    Track website usage like visits, views, countries, devices using Umami analytics. Umami is an
                    analytics alternative to Google Analytics. These data will be used to improve this website.
                </p>
                <li class="font-semibold">Added RAW Sitemap</li>
                <p class="text-md">
                    Now this website is provided with 2 sitemaps. The overall sitemap (generated) and RAW sitemap
                    (manual). RAW sitemap is having video schema while generated sitemap doesn't have.
                </p>
                <li class="font-semibold">Hello, User. Welcome!</li>
                <p>
                    Now if you are going to the console (on inspect element), you will see a welcoming message. Toggle
                    the Inspect element by clicking
                    <kbd
                        class="px-2 py-1.5 text-xs font-semibold text-gray-100 bg-gray-600 border border-gray-500 rounded-lg"
                        >⌘</kbd
                    >
                    +
                    <kbd
                        class="px-2 py-1.5 text-xs font-semibold text-gray-100 bg-gray-600 border border-gray-500 rounded-lg"
                        >⌥</kbd
                    >
                    +
                    <kbd
                        class="px-2 py-1.5 text-xs font-semibold text-gray-100 bg-gray-600 border border-gray-500 rounded-lg"
                        >I</kbd
                    >
                </p>
                <li class="font-semibold">Added JSON LD schema for schema.org</li>
                <p class="text-md">
                    This website uses <code>Person</code> types filled with Choco's identity to help Search engines
                    understand more about this website.
                </p>
            </ul>
            <h2 class="text-lg text-chocolate-600 font-bold my-2">Chores</h2>
            <ul class="list-disc text-chocolate-700 mx-5">
                <li class="font-semibold">Replace old assets with the original one</li>
                <p class="text-md">
                    I was given original assets by Choco Oujo-sama. Heavily thanks for sending me the whole assets!
                </p>
                <li class="font-semibold">Added Choco's handsign signature to bottom right</li>
                <p class="text-md">Improving website aesthetics.</p>
                <li class="font-semibold">Added new merch to <code>/merch</code> endpoint</li>
                <p class="text-md">New merch is out. Y'all better get it now</p>
                <li class="font-semibold">Weekly schedule update</li>
                <p class="text-md">My routinities every Monday :).</p>
            </ul>
            <h2 class="text-lg text-chocolate-600 font-bold my-2">Fixes</h2>
            <ul class="list-disc text-chocolate-700 mx-5">
                <li class="font-semibold">Fixed mobile responsive issues</li>
                <p class="text-md">The signature on the bottom right is causing issues on mobile. So this was fixed.</p>
                <li class="font-semibold">Fixed bugs 1, bugs 2, bugs 3, etc</li>
                <p class="text-md">I have fixed many bugs that makes something doesn't work on this website.</p>
            </ul>
            <h2 class="text-lg text-chocolate-600 font-bold my-2">Documentation</h2>
            <ul class="list-disc text-chocolate-700 mx-5">
                <li class="font-semibold">Added commands to expose port into local network</li>
                <p class="text-md">
                    Informs the developers how to expose :3000 port into their local network so their phone can see the
                    development port too.
                </p>
            </ul>
            <h2 class="text-lg text-chocolate-600 font-bold my-2">Contributors</h2>
            <p class="text-base text-chocolate-700">
                Heavily thanks to myself to make these big changes from time to time. Just wait for the next updates.
                Enjoy!
            </p>
        </div>
    </FullScreenCard>
</template>

<style></style>
