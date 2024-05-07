<template>
    <div class="flex flex-col items-center text-center h-fit gap-6 rounded-xl border border-[#b684b3] transition-all duration-500 hover:shadow-none shadow-[0px_0px_13px_-7px_black] p-4">
        <p class="font-Comfortaa text-2xl">Остались вопросы?</p>
        <p class="text-lg max-w-2xl opacity-70">Если у вас возникли вопросы относительно наших услуг, доступных дат или ценовой политики, пожалуйста, свяжитесь с нами. Мы всегда рады обсудить ваши потребности и предложить индивидуальные решения, соответствующие вашим ожиданиям.</p>
        <button @click="isFeedbackShow = true" class="py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent max-w-2xl">Оставить заявку</button>
    </div>
    <div @click="isFeedbackShow = false" class="fixed bg-black/70 inset-0 z-[5] transition-all duration-500" :class="{'-translate-x-full' : !isFeedbackShow}"></div>
    <button @click="isFeedbackShow = false" class="fixed top-8 right-8 z-[6]" :class="{'hidden' : !isFeedbackShow}">
        <Icon class="text-3xl text-white" name="ic:baseline-close"/>
    </button>
    <div class="fixed top-1/2 -translate-y-1/2 left-1/2 z-[6] transition-all duration-50 w-full px-[15px] flex items-center justify-center text-xl" :class="isFeedbackShow ? '-translate-x-1/2' : 'translate-x-[5000px]'">
        <FormKit @submit="feedback" type="form" :actions="false" form-class="p-4 bg-white flex flex-col gap-8 w-full max-w-[300px] rounded-xl" messages-class="hidden">
            <p class="text-xl font-Comfortaa text-[#b684b3]">Форма обратной связи</p>
            <div class="flex flex-col gap-4">
                <FormKit type="text" v-model="feedbackForm.name" name="Имя" validation="required" messages-class="text-[#E9556D] font-Comfortaa" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#b684b3] py-2 px-4" placeholder="Ваше имя"></FormKit>
                <FormKit type="text" v-model="feedbackForm.email" name="Почта" validation="required|email" messages-class="text-[#E9556D] font-Comfortaa" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#b684b3] py-2 px-4" placeholder="Ваша почта"></FormKit>
                <FormKit type="text" v-model="feedbackForm.phone" name="Номер телефона" validation="required|length:11" messages-class="text-[#E9556D] font-Comfortaa" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#b684b3] py-2 px-4" placeholder="Ваш номер телефона"></FormKit>
            </div>
            <button type="submit" class="py-0.5 mx-auto px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent w-fit">Отправить</button>
        </FormKit>
    </div>
</template>

<script setup>
    /* открытие формы */
    const isFeedbackShow = ref(false)


    /* создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())


    /* отправка данных */
    const token = "7089593722:AAFSLZxkxkq0GVp0yjUoYO0I1EKPEBZZROU"
    const chatId = "-4233107265"
    const URL = `https://api.telegram.org/bot${token}/sendMessage`

    const feedbackForm = ref({
        name: "",
        email: "",
        phone: ""
    })

    const feedback = async() =>{
        let msg = "<b>Заявка на обратную связь</b>\n"
        + `<b>Имя:</b> ${feedbackForm.value.name}\n`
        + `<b>Почта:</b> ${feedbackForm.value.email}\n`
        + `<b>Номер телефона:</b> ${feedbackForm.value.phone}\n`
        const {data, error} = await useFetch(URL,{
            body:{
                'chat_id': chatId,
                'parse_mode': 'html',
                'text': msg
            },
            method:'post'
        })

        if (error.value) return messageTitle.value = 'При отправке произошла ошибка!', messageType.value = false
        messageTitle.value = 'Успешная отправка!', messageType.value = true 
        feedbackForm.value.name = ""
        feedbackForm.value.email = ""
        feedbackForm.value.phone = ""
        isFeedbackShow.value = false
        setTimeout(() => {
            messageTitle.value = null
        }, 3000);
    }
</script>