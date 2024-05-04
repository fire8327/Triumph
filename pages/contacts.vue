<template>
    <div class="flex flex-col gap-6">
        <p class="font-Comfortaa text-3xl">Контакты</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex flex-col">
                <div class="flex items-center">
                    <div class="relative">
                        <p class="text-xl bg-white p-4 rounded-3xl relative z-[1] font-Comfortaa">Позвоните нам</p>
                        <div class="bg-[#b684b3]/70 h-5 w-5 absolute bottom-0 right-0"></div>
                    </div>
                    <div class="bg-[#b684b3]/70 h-full rounded-tr-3xl rounded-tl-3xl grow"></div>
                </div>
                <div class="p-4 rounded-l-3xl rounded-br-3xl bg-[#b684b3]/70 text-white flex flex-col items-center justify-center min-h-[160px] md:h-full">
                    <p class="text-base">Бесплатный звонок</p>
                    <NuxtLink to="tel:8 (800) 555-35-35" class="text-2xl font-normal">8 (800) 555-35-35</NuxtLink>
                    <p class="text-base mt-4">Горячая линия</p>
                    <NuxtLink to="tel:8 (800) 555-35-35" class="text-2xl font-normal">8 (800) 555-35-35</NuxtLink>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex items-center">
                    <div class="relative">
                        <p class="text-xl bg-white p-4 rounded-3xl relative z-[1] font-Comfortaa">Позвоните нам</p>
                        <div class="bg-[#b684b3]/70 h-5 w-5 absolute bottom-0 right-0"></div>
                    </div>
                    <div class="bg-[#b684b3]/70 h-full rounded-tr-3xl rounded-tl-3xl grow"></div>
                </div>
                <div class="p-4 rounded-l-3xl rounded-br-3xl bg-[#b684b3]/70 text-white flex flex-col min-h-[160px] md:h-full items-center justify-center">
                    <p class="text-base">По всем вопросам</p>
                    <NuxtLink to="mailto:example@mail.ru" class="text-2xl font-normal">example@mail.ru</NuxtLink>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex items-center">
                    <div class="relative">
                        <p class="text-xl bg-white p-4 rounded-3xl relative z-[1] font-Comfortaa">Социальные сети</p>
                        <div class="bg-[#b684b3]/70 h-5 w-5 absolute bottom-0 right-0"></div>
                    </div>
                    <div class="bg-[#b684b3]/70 h-full rounded-tr-3xl rounded-tl-3xl grow"></div>
                </div>
                <div class="p-4 rounded-l-3xl rounded-br-3xl bg-[#b684b3]/70 text-white min-h-[160px] md:h-full">
                    <div class="flex items-center gap-4 h-full justify-center">
                        <NuxtLink class="transition-all duration-500 hover:opacity-70">
                            <Icon name="mdi:vk" class="text-3xl text-white"/>
                        </NuxtLink>
                        <NuxtLink class="transition-all duration-500 hover:opacity-70">
                            <Icon name="ic:twotone-telegram" class="text-3xl text-white"/>
                        </NuxtLink>
                        <NuxtLink class="transition-all duration-500 hover:opacity-70">
                            <Icon name="mdi:instagram" class="text-3xl text-white"/>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex items-center">
                    <div class="relative">
                        <p class="text-xl bg-white p-4 rounded-3xl relative z-[1] font-Comfortaa">Адрес</p>
                        <div class="bg-[#b684b3]/70 h-5 w-5 absolute bottom-0 right-0"></div>
                    </div>
                    <div class="bg-[#b684b3]/70 h-full rounded-tr-3xl rounded-tl-3xl grow"></div>
                </div>
                <div class="p-4 rounded-l-3xl rounded-br-3xl bg-[#b684b3]/70 text-white flex flex-col items-center justify-center text-center min-h-[160px] md:h-full">
                    <p class="text-base">Адрес офиса в Москве</p>
                    <p class="text-2xl font-normal">ул. Пушкина, д. Колотушкина</p>
                    <p class="text-base mt-4">Часы работы:</p>
                    <p class="text-2xl font-normal">Пн-пт: 10:00-20:00</p>
                </div>
            </div>
        </div>
    </div>
    <iframe class="w-full h-[400px] rounded-xl" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af7e5b4db4d53a1a16ed44754ce3ac18ffb3919da84993d4d1abbf9595ca80ac1&amp;source=constructor" frameborder="0"></iframe>
</template>

<script setup>

</script>