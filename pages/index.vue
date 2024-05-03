<template>
    <Swiper :loop="true" :space-between="20" :modules="[SwiperAutoplay, SwiperPagination]" :pagination="{clickable: true}" :autoplay="{delay:3500}" class="w-full">
        <SwiperSlide class="w-full">
            <img class="object-cover aspect-video w-full rounded-xl" src="/images/hero/1.jpg" alt="">            
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img class="object-cover aspect-video w-full rounded-xl" src="/images/hero/2.jpg" alt="">            
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img class="object-cover aspect-video w-full rounded-xl" src="/images/hero/3.jpg" alt="">            
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img class="object-cover aspect-video w-full rounded-xl" src="/images/hero/4.jpg" alt="">            
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img class="object-cover aspect-video w-full rounded-xl" src="/images/hero/5.jpg" alt="">            
        </SwiperSlide>
    </Swiper>
    <div class="flex flex-col items-center text-center h-fit gap-6 rounded-xl border border-[#b684b3] transition-all duration-500 hover:shadow-none shadow-[0px_0px_13px_-7px_black] p-4">
        <p class="font-Comfortaa text-2xl">Добро пожаловать в Триумф!</p>
        <p class="text-lg max-w-2xl opacity-70">Создайте незабываемый праздник с нами! В Триумфе мы стремимся сделать каждый момент особенным, запоминающимся и волшебным для вас.</p>
    </div>
    <div class="flex flex-col gap-6">
        <p class="font-Comfortaa text-2xl">Почему выбирают нас?</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 text-lg">
            <div class="flex flex-col gap-4 rounded-xl border border-[#b684b3] transition-all duration-500 hover:shadow-none shadow-[0px_0px_13px_-7px_black] p-4">
                <div class="flex items-center gap-4">
                    <p class="font-Comfortaa">Индивидуальный подход</p>
                    <Icon name="ic:sharp-person-search" class="text-3xl text-[#b684b3]"/>
                </div>
                <p class="opacity-70">Мы понимаем, что каждый человек уникален, поэтому наши праздники разрабатываются с учетом интересов и предпочтений каждого гостя.</p>
            </div>
            <div class="flex flex-col gap-4 rounded-xl border border-[#b684b3] transition-all duration-500 hover:shadow-none shadow-[0px_0px_13px_-7px_black] p-4">
                <div class="flex items-center gap-4">
                    <p class="font-Comfortaa">Разнообразие тематик</p>
                    <Icon name="fluent:diversity-28-filled" class="text-3xl text-[#b684b3]"/>
                </div>
                <p class="opacity-70">Мы предлагаем широкий выбор тематик для праздников, чтобы сделать ваш праздник по-настоящему уникальным.</p>
            </div>
            <div class="flex flex-col gap-4 rounded-xl border border-[#b684b3] transition-all duration-500 hover:shadow-none shadow-[0px_0px_13px_-7px_black] p-4">
                <div class="flex items-center gap-4">
                    <p class="font-Comfortaa">Качество и надежность</p>
                    <Icon name="material-symbols:health-and-safety" class="text-3xl text-[#b684b3]"/>
                </div>
                <p class="opacity-70">Мы уделяем особое внимание качеству предоставляемых услуг и своевременной организации мероприятий. Вы можете быть уверены, что ваше мероприятие пройдет гладко и без сбоев.</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6 text-lg">
        <p class="font-Comfortaa text-2xl">Наши услуги</p>
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
        <NuxtLink to="/" class="py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent w-fit self-end">Узнать подробнее</NuxtLink>
    </div>
    <Feedback></Feedback>
</template>

<script setup>

</script>