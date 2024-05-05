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
        <p class="font-Comfortaa text-3xl">Добро пожаловать в Триумф!</p>
        <p class="text-xl max-w-2xl opacity-70">Создайте незабываемый праздник с нами! В Триумфе мы стремимся сделать каждый момент особенным, запоминающимся и волшебным для вас.</p>
    </div>
    <div class="flex flex-col gap-6">
        <p class="font-Comfortaa text-3xl">Почему выбирают нас?</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xl">
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
    <ServicesBrief></ServicesBrief>    
    <Feedback></Feedback>
</template>

<script setup>

</script>