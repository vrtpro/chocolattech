<script setup lang="ts">
useHead({
    title: 'Merchandise',
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <FlexCard>
            <div class="p-2 lg:py-16 lg:flex-1">
                <!-- TESTING PURPOSES ONLY. DOWNLOAD ASSETS & CHANGE TO LOCAL PATH! -->
                <img
                    src="https://chocolatte.falcxxdev.ml/vite_assets/img/merch_1.jpg"
                    alt="Merch 1"
                    class="h-[22rem] m-auto rounded-xl shadow-md"
                />
            </div>
            <div class="px-5 lg:py-auto lg:flex lg:w-1/2">
                <div class="my-4 px-3 lg:mt-36 mx-auto">
                    <h1 class="text-2xl text-chocolate-800 text-center font-bold">
                        Phone case & Acrylic keychain Choco Latte
                    </h1>
                    <p class="text-base text-chocolate-700 mb-4 mt-2 text-center">Pre order @ Tokopedia</p>
                    <a
                        href="https://tokopedia.com/erfolganime"
                        class="button w-full mb-4"
                        target="_blank"
                        rel="noreferrer"
                    >
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
