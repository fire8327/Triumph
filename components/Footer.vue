<template>
    <footer class="flex flex-col gap-6 items-center py-6 mt-10">
        <div class="flex items-center max-lg:flex-col gap-6 text-lg">
            <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">Услуги</NuxtLink>
            <NuxtLink to="/gallery" class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">Фотогалерея</NuxtLink>
            <NuxtLink to="/about" class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">О нас</NuxtLink>
            <NuxtLink to="/contacts" class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">Контакты</NuxtLink>
            <div class="h-5 w-px bg-[#b684b3] max-lg:hidden"></div>
            <div class="flex items-center gap-4">
                <NuxtLink class="transition-all duration-500 hover:opacity-70">
                    <Icon name="mdi:vk" class="text-3xl text-[#b684b3]"/>
                </NuxtLink>
                <NuxtLink class="transition-all duration-500 hover:opacity-70">
                    <Icon name="ic:twotone-telegram" class="text-3xl text-[#b684b3]"/>
                </NuxtLink>
                <NuxtLink class="transition-all duration-500 hover:opacity-70">
                    <Icon name="mdi:instagram" class="text-3xl text-[#b684b3]"/>
                </NuxtLink>
            </div>
        </div>
        <NuxtLink to="/">
            <img src="/images/header/logo.webp" alt="" class="w-44">
        </NuxtLink>
    </footer>
</template>

<script setup>

</script>