<script setup lang="ts"></script>

<template>
    <div>
        <header class="pt-4 px-4 lg:px-12 font-lexend transition-all">
            <nav class="mx-auto p-4 py-3 h-14 bg-[#ffb5cd] text-white flex justify-between shadow-lg rounded-2xl z-10">
                <div class="w-fit">
                    <NuxtLink to="/" class="navbar__link">
                        <img
                            src="https://media.discordapp.net/attachments/953176156000104539/977521586393473024/logo.png"
                            alt="Logo"
                            class="w-24"
                        />
                    </NuxtLink>
                </div>
                <div class="bg-white h-8 text-chocolate-700 rounded-lg px-4">
                    <ul class="flex gap-4 pt-[0.15rem]">
                        <li class="navbar__list">
                            <NuxtLink to="/" class="navbar__link"><Icon name="material-symbols:home" /></NuxtLink>
                        </li>
                        <li class="navbar__list">
                            <NuxtLink to="/about" class="navbar__link"
                                ><Icon name="material-symbols:person"
                            /></NuxtLink>
                        </li>
                        <li class="navbar__list">
                            <NuxtLink to="/models" class="navbar__link"><Icon name="mdi:tshirt-crew" /></NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<style></style>
