<template>
    <div class="flex flex-col gap-6 text-xl">
        <p class="font-Comfortaa text-3xl">Наши услуги</p>
        <p class="opacity-70">Мы предлагаем широкий спектр услуг для успешной реализации вашего мероприятия. Независимо от его масштаба и характера, наша команда готова обеспечить вам все необходимое для создания незабываемого и эффективного события.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-6 items-center">
                <img src="/images/services/1.jpg" alt="" class="rounded-xl aspect-[7/10] object-cover">
                <p class="text-xl font-Comfortaa">Детские праздники</p>   
                <p class="opacity-70 text-justify">Создание волшебной атмосферы с помощью оформления, соответствующего выбранной теме, будь то сказочные герои, мультфильмы или приключения.</p>             
            </div>
            <div class="flex flex-col gap-6 items-center">
                <img src="/images/services/2.jpg" alt="" class="rounded-xl aspect-[7/10] object-cover">
                <p class="text-xl font-Comfortaa">Праздник под ключ</p> 
                <p class="opacity-70 text-justify">Организация мероприятия от начала до конца, включая выбор места проведения, разработку темы, составление бюджета и работу с поставщиками.</p>                
            </div>
            <div class="flex flex-col gap-6 items-center">
                <img src="/images/services/3.jpg" alt="" class="rounded-xl aspect-[7/10] object-cover">
                <p class="text-xl font-Comfortaa">Фотосессии</p> 
                <p class="opacity-70 text-justify">Использование высококачественной фототехники и освещения для создания красивых и запоминающихся изображений.</p>                
            </div>
            <div class="flex flex-col gap-6 items-center">
                <img src="/images/services/4.jpg" alt="" class="rounded-xl aspect-[7/10] object-cover">
                <p class="text-xl font-Comfortaa">Аренда</p> 
                <p class="opacity-70 text-justify">Предоставление широкого выбора мебели, декораций, звукового и светового оборудования для вашего мероприятия.</p>                
            </div>
        </div>
        <NuxtLink to="/services" class="py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent w-fit self-end">Узнать подробнее</NuxtLink>
    </div>
</template>