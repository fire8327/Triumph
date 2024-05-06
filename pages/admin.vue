<template>
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
</script>