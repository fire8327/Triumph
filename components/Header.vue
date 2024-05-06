<template>
    <header class="w-full grid-container text-lg py-4 relative">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/images/header/logo.webp" alt="" class="w-44">    
            </NuxtLink>
            <nav class="flex items-center gap-6 transition-all duration-500 max-lg:py-6 max-lg:absolute max-lg:w-full max-lg:left-0 max-lg:bg-white max-lg:border-t border-[#b684b3] max-lg:flex-col max-lg:z-[5]" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/services" class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">Услуги</NuxtLink>
                <NuxtLink to="/gallery" class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">Фотогалерея</NuxtLink>
                <NuxtLink to="/about" class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">О нас</NuxtLink>
                <NuxtLink to="/contacts" class="flex flex-col after:transition-all after:duration-500 after:h-px after:w-0 after:bg-[#b684b3] hover:after:w-full">Контакты</NuxtLink>
                <button @click="logout" v-if="authenticated" class="py-0.5 px-4 rounded-full hover:bg-[#b684b3] border border-[#b684b3] hover:text-white transition-all duration-500 text-[#b684b3] bg-transparent">Выход</button>
                <NuxtLink v-else to="/auth" class="py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Вход</NuxtLink>
            </nav>
            <button class="lg:hidden" @click="isMenuShow = !isMenuShow">
                <Icon name="ph:list-light" class="text-3xl"/>
            </button>
        </div>
        <div class="fixed top-20 bg-black/70 inset-0 lg:hidden max-lg:z-[4]" :class="{'hidden' : !isMenuShow}"></div>
        <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-4 px-6 py-2 rounded-2xl w-fit bg-white shadow-[0px_0px_13px_-7px_black]" :class="messageType ? ' text-[#b684b3]' : 'text-red-500'" v-if="messageTitle">
            <span>{{messageTitle}}</span>
        </button>
    </header>
</template>

<script setup>
    /* показ меню */
    const isMenuShow = ref(false) 


    /* хук */
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', () => {
        isMenuShow.value = false
    })


    /* проверка входа */
    const { authenticated, role, id } = storeToRefs(useUserStore())


    /* создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())


    /* выход из аккаунта */
    const logout = () => {
        authenticated.value = false
        id.value = null
        role.value = ""
        messageTitle.value = 'Успешный выход!', messageType.value = true
        setTimeout(() => {
            messageTitle.value = null
        }, 3000)
        router.push("/")
    }
</script>