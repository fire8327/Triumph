<template>
    <div class="flex flex-col gap-6">
        <p class="font-Comfortaa text-3xl">Галерея</p>
        <p class="text-xl opacity-70">Загляните в наши восхитительные моменты! Добро пожаловать в нашу фотогалерею, где каждый кадр - история волнующих событий. От захватывающих моментов наших корпоративных мероприятий до волнующих деталей свадебных церемоний, здесь вы найдете вдохновение и эмоциональное воспоминание.</p>
        <p class="text-xl opacity-70">Наши фотографии отражают не только красоту момента, но и нашу страсть к созданию незабываемых мероприятий. Погрузитесь в мир ярких красок, эмоций и удивительных деталей, которые делают каждое событие особенным.</p>
        <p class="text-xl opacity-70">Проведите время, наслаждаясь нашей коллекцией фотографий, и дайте вдохновение стать частью следующего незабываемого момента в вашей жизни. События становятся незабываемыми, когда они остаются в памяти, и наши фотографии помогут вам сохранить эти моменты на всю жизнь.</p>
        <Swiper :loop="true" :space-between="20" :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" :navigation="{enabled: true}" :pagination="{clickable: true}" :autoplay="{delay:3500}" class="w-full">
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
    </div>
    <ServicesBrief></ServicesBrief> 
</template>

<script setup>

</script>