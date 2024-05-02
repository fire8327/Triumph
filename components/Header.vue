<template>
    <header class="w-full grid-container text-lg py-4">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/images/header/logo.webp" alt="" class="w-44">    
            </NuxtLink>
            <nav class="flex items-center gap-6">
                <NuxtLink>Услуги</NuxtLink>
                <NuxtLink>Фотогалерея</NuxtLink>
                <NuxtLink>Форум</NuxtLink>
                <NuxtLink>О нас</NuxtLink>
                <NuxtLink class="py-0.5 px-4 rounded-full bg-[#292929] border border-[#292929] text-white transition-all duration-500 hover:text-[#292929] hover:bg-transparent">Войти</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>