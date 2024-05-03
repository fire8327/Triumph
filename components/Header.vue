<template>
    <header class="w-full grid-container text-lg py-4 relative">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/images/header/logo.webp" alt="" class="w-44">    
            </NuxtLink>
            <nav class="flex items-center gap-6 transition-all duration-500 max-lg:py-6 max-lg:absolute max-lg:w-full max-lg:left-0 max-lg:bg-white max-lg:border-t border-[#292929] max-lg:flex-col max-lg:z-[5]" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">Услуги</NuxtLink>
                <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">Фотогалерея</NuxtLink>
                <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">Форум</NuxtLink>
                <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">О нас</NuxtLink>
                <NuxtLink class="py-0.5 px-4 rounded-full bg-[#292929] border border-[#292929] text-white transition-all duration-500 hover:text-[#292929] hover:bg-transparent">Войти</NuxtLink>
            </nav>
            <button class="lg:hidden" @click="isMenuShow = !isMenuShow">
                <Icon name="ph:list-light" class="text-3xl"/>
            </button>
        </div>
        <div class="fixed top-20 bg-black/70 inset-0 lg:hidden max-lg:z-[4]" :class="{'hidden' : !isMenuShow}"></div>
    </header>
</template>

<script setup>
    /* показ меню */
    const isMenuShow = ref(false) 
</script>