<template>
    <footer class="flex flex-col gap-6 items-center py-6">
        <div class="flex items-center max-lg:flex-col gap-6 text-lg">
            <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">Услуги</NuxtLink>
            <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">Фотогалерея</NuxtLink>
            <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">Форум</NuxtLink>
            <NuxtLink class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#292929] hover:after:w-full">О нас</NuxtLink>
            <div class="h-5 w-px bg-[#292929]"></div>
            <div class="flex items-center gap-4">
                <NuxtLink class="transition-all duration-500 hover:opacity-70">
                    <Icon name="mdi:vk" class="text-3xl"/>
                </NuxtLink>
                <NuxtLink class="transition-all duration-500 hover:opacity-70">
                    <Icon name="ic:twotone-telegram" class="text-3xl"/>
                </NuxtLink>
                <NuxtLink class="transition-all duration-500 hover:opacity-70">
                    <Icon name="mdi:instagram" class="text-3xl"/>
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