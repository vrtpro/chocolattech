<script setup lang="ts">
useHead({
    title: 'Donation',
});

const provider = ref([
    { name: 'Sociabuzz', url: 'https://sociabuzz.com/chocolatte' },
    { name: 'Trakteer', url: 'https://trakteer.id/chocolattech_/tip' },
    { name: 'Saweria', url: 'https://saweria.co/ChocoLatte' },
    { name: 'Ko-fi', url: 'https://ko-fi.com/chocolattech' },
    { name: 'Streamlabs', url: 'https://streamlabs.com/chocolattechannel/tip' },
]);
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2 lg:py-9">
            <h1 class="text-3xl text-chocolate-800 font-bold">Donation</h1>
            <p class="text-base text-chocolate-700">
                You can support by donating Chocoin to help choco creating more content!
            </p>
            <div class="lg:grid grid-cols-1 lg:gap-2 md:grid-cols-3 mt-4">
                <a
                    v-for="prov in provider"
                    :href="prov.url"
                    class="button w-full my-1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon
                        name="material-symbols:open-in-new"
                        class="block flex-grow-0 shrink-0"
                        width="32"
                        height="32"
                    />
                    <span class="flex-grow flex-shrink text-left w-full">{{ prov.name }}</span>
                </a>
            </div>
            <p class="text-base text-chocolate-700 my-3">Each support is appreciated. Thanks for your support!</p>
        </div>
    </FullScreenCard>
</template>

<style></style>
