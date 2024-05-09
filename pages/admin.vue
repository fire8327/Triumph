<template>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Comfortaa text-[#b684b3]">Добавление фото в галерею</p>
        <FormKit @submit="sliderForm" type="form" form-class="flex flex-col gap-6 full" :actions="false" messages-class="hidden">
            <div class="flex flex-col gap-6 xl:gap-4 items-center w-full">
                <FormKit @change="imageToBase" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" type="file" name="Фото" validation="required" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" outer-class="w-full" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full"/>                
                <FormKit type="submit" input-class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Добавить</FormKit>
            </div>
        </FormKit>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Comfortaa text-[#b684b3]">Удаление фото из галереи</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="relative group transition-all duration-500 hover:scale-110" v-for="image in images">
                <img :src="image.img" alt="" class="aspect-video object-cover rounded-xl">
                <button @click="deleteImage(image.id)" class="inset-0 bg-black/30 absolute rounded-xl flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <Icon name="material-symbols:delete-forever" class="text-6xl text-white"/>
                </button>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Comfortaa text-[#b684b3]">Заказанные услуги</p>
        <div class="flex flex-col gap-8 text-lg rounded-xl border border-[#b684b3] p-4 relative lg:w-1/2" v-for="order in orders">
            <div class="flex flex-col gap-4">
                <p><span class="font-Comfortaa">Заказчик:</span> <span class="opacity-70">{{ order.users.surname }} {{ order.users.name }} {{ order.users.patronymic }}</span></p>
                <p><span class="font-Comfortaa">Номер заказа:</span> <span class="opacity-70">{{ order.id }}</span></p>
                <p><span class="font-Comfortaa">Статус заказа:</span> <span class="opacity-70">{{ order.status }}</span></p>
                <p><span class="font-Comfortaa">Наименование услуги:</span> <span class="opacity-70">{{ order.title }}</span></p>
                <p><span class="font-Comfortaa">Дополнительные услуги:</span> <span class="opacity-70">{{ order.additional.replace(/,/g, ', ') }}</span></p>
                <p><span class="font-Comfortaa">Краткое описание мероприятия:</span> <span class="opacity-70">{{ order.desc   }}</span></p>
                <p><span class="font-Comfortaa">Дата проведения мероприятия:</span> <span class="opacity-70">{{ order.date   }}</span></p>
                <p><span class="font-Comfortaa">Количество человек:</span> <span class="opacity-70">{{ order.peopleCount   }}</span></p>
                <p><span class="font-Comfortaa">Цена:</span> <span class="opacity-70">{{ order.price.toLocaleString() }} ₽</span></p>
            </div>
            <button v-if="order.status == 'Новый'" @click="deleteOrder(order.id)" class="absolute top-4 right-4 text-red-500">
                <Icon class="text-3xl" name="ic:baseline-close"/>
            </button>
            <button v-if="order.status == 'Новый'" @click="completeOrder(order.id)" class="absolute top-4 right-14 text-[#569E0B]">
                <Icon class="text-3xl" name="mdi:check"/>
            </button>
        </div>
    </div>
</template>

<script setup>
    /* подключение БД */
    const supabase = useSupabaseClient() 


    /* создание сообщений и роутера */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())
    const router = useRouter()


    /* показ заказнных услуг */    
    const { data: orders, error: ordersError } = await supabase
    .from('orders')
    .select('*, users(*)')
    
    
    /* отмена заказа */
    const deleteOrder = async (orderId) => {
        const { data, error } = await supabase
        .from('orders')
        .update({ status: 'Отменён'})
        .eq('id', `${orderId}`)
        .eq('status', `Новый`)
        .select()
          
        if(data) {
            console.log(data[0])
            messageTitle.value = 'Заказ отменён!', messageType.value = true 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
            setTimeout(() => {
                router.go()
                messageTitle.value = null
            }, 1500) 
        } else {
            messageTitle.value = 'Произошла ошибка!', messageType.value = false 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
        }
    }


    /* подтверждение заказа */
    const completeOrder = async (orderId) => {
        const { data, error } = await supabase
        .from('orders')
        .update({ status: 'Выполнен'})
        .eq('id', `${orderId}`)
        .eq('status', `Новый`)
        .select()
          
        if(data) {
            console.log(data[0])
            messageTitle.value = 'Заказ выполнен!', messageType.value = true 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
            setTimeout(() => {
                router.go()
                messageTitle.value = null
            }, 1500) 
        } else {
            messageTitle.value = 'Произошла ошибка!', messageType.value = false 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
        }
    }
     

    /* добавление фото */
    const imageSlider = ref()
    const imageToBase = (el) => {
        const file = el.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.onloadend = () => {
            imageSlider.value = reader.result
        }
        reader.readAsDataURL(file)
    }


    /* форма слайдера */
    const sliderForm = async () => {        
        const { data, error } = await supabase
        .from('gallery')
        .insert([
            { img: `${imageSlider.value}` },
        ])
        .select()          

        if (data) {
            messageTitle.value = 'Успешное добавление!', messageType.value = true 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
            setTimeout(() => {
                router.go()
                messageTitle.value = null
            }, 1500) 
            imageSlider.value = "" 
        }
    }


    /* галерея */
    const { data: images, error: imagesError } = await supabase
    .from('gallery')
    .select("*")


    /* удаление фото из галереи */
    const deleteImage = async (imageId) => {        
        const { error } = await supabase
        .from('gallery')
        .delete()
        .eq('id', `${imageId}`)
          
        messageTitle.value = 'Изображение удалено!', messageType.value = true 
        setTimeout(() => {
            messageTitle.value = null
        }, 3000) 
        setTimeout(() => {
            router.go()
            messageTitle.value = null
        }, 1500) 
    }
</script>