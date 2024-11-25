<script setup lang="ts">
useHead({
    title: 'Merchandise',
});

const merch = [
    {
        name: 'Phone case & Acrylic keychain Choco Latte',
        desc: 'Pre-order @ Tokopedia',
        img: '/img/merch_1.jpg',
        url: 'https://tokopedia.com/erfolganime',
    },
    {
        name: 'Acrylic keychain Choco Latte',
        desc: 'Pre-order @ Tokopedia',
        img: '/img/merch_2.webp',
        url: 'https://tokopedia.com/erfolganime',
    },
];
</script>

<template>
    <FullScreenCard class="h-auto">
        <FlexCard v-for="product in merch">
            <div class="p-2 lg:py-16 lg:flex-1">
                <img :src="product.img" alt="product.name" class="h-[22rem] m-auto rounded-xl shadow-md" />
            </div>
            <div class="px-5 lg:py-auto lg:flex lg:w-1/2">
                <div class="my-4 px-3 lg:mt-36 mx-auto">
                    <h1 class="text-2xl text-chocolate-800 text-center font-bold">
                        {{ product.name }}
                    </h1>
                    <p class="text-base text-chocolate-700 mb-4 mt-2 text-center">{{ product.desc }}</p>
                    <a :href="product.url" class="button w-full mb-4" target="_blank" rel="noreferrer">
                        <Icon
                            name="material-symbols:shopping-cart"
                            class="block flex-grow-0 shrink-0"
                            width="32"
                            height="32"
                        />
                        <span class="flex-grow flex-shrink text-left w-full">Buy Here!</span>
                    </a>
                </div>
            </div>
        </FlexCard>
    </FullScreenCard>
</template>

<style></style>
