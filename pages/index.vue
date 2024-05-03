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
        <p class="font-Comfortaa text-2xl">Наша команда</p>
        <p class="opacity-70">Наши аниматоры - это настоящие профессионалы своего дела, полные энтузиазма и творческой энергии. Они обладают богатым опытом работы и знают, как создать атмосферу радости и веселья на любом мероприятии.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-6">
                <img src="/images/team/1.png" alt="" class="rounded-xl bg-[#D5EDFE]">
                <p class="text-xl font-Comfortaa">Дмитрий Петров</p>
                <p class="opacity-70">Планирует, координирует и реализует мероприятия от начала до конца, включая выбор места проведения, составление бюджета, работу с поставщиками, а также обеспечение безупречного хода события.</p>
            </div>
            <div class="flex flex-col gap-6">
                <img src="/images/team/2.png" alt="" class="rounded-xl bg-[#FBDEED]">
                <p class="text-xl font-Comfortaa">Ирина Кузнецова</p>
                <p class="opacity-70">Создаёт атмосферу мероприятия через декорации, цветовое оформление, освещение и другие элементы, чтобы подчеркнуть тему и общий стиль события.</p>
            </div>
            <div class="flex flex-col gap-6">
                <img src="/images/team/3.png" alt="" class="rounded-xl bg-[#F2F8DA]">
                <p class="text-xl font-Comfortaa">Ольга Николаева</p>
                <p class="opacity-70">Захватывает ключевые моменты события через фотографии или видео, создавая незабываемые визуальные воспоминания для участников.</p>
            </div>
            <div class="flex flex-col gap-6">
                <img src="/images/team/4.png" alt="" class="rounded-xl bg-[#FBE4D4]">
                <p class="text-xl font-Comfortaa">Максим Федоров</p>
                <p class="opacity-70">Отвечает за планирование и управление логистикой мероприятия, включая транспорт, размещение гостей, распределение ресурсов и управление временем.</p>
            </div>
        </div>
    </div>
    <Feedback></Feedback>
</template>

<script setup>

</script>