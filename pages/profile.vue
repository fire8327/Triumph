<template>    
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Comfortaa text-[#b684b3]">Контактные данные</p>
        <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center">
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit type="text" v-model="user.name" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Фамилия"/>
                <FormKit type="text" v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Имя"/>
                <FormKit type="text" v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Отчество"/>
            </div>
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit type="text" v-model="user.login" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Логин"/>
                <FormKit type="text" v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-Comfortaa" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="••••••"/>
            </div>            
            <button type="submit" class="px-4 py-2 bg-[#b684b3] text-white rounded-full w-[160px] text-center">Обновить данные</button>
        </FormKit>
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
                <p><span class="font-Comfortaa">Цена:</span> <span class="opacity-70">{{ order.price.toLocaleString() }} ₽</span></p>
            </div>
            <button v-if="order.status == 'Новый'" @click="deleteOrder(order.id)" class="absolute top-4 right-4 text-red-500">
                <Icon class="text-3xl" name="ic:baseline-close"/>
            </button>
        </div>
    </div>
</template>

<script setup>
    /* подключение БД и проверка пользователя */
    const supabase = useSupabaseClient() 
    const { id } = storeToRefs(useUserStore())

    const { data:users, error } = await supabase
    .from('users')
    .select('*')   
    .eq('id',`${id.value}`)  


    /* создание сообщений и роутера */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())
    const router = useRouter()


    /* создание формы пользователя */
    const user = ref({
        name: users[0].name,
        surname: users[0].surname,
        patronymic: users[0].patronymic,
        login: users[0].login,
        password: users[0].password
    }) 


    /* обновление данных */
    const updateUser = async () => {        
        const { data, error } = await supabase
        .from('users')
        .update({ name: `${user.value.name}`, surname: `${user.value.surname}`, patronymic: `${user.value.patronymic}`, login: `${user.value.login}`, password: `${user.value.password}`})
        .eq('id', `${id.value}`)
        .select()
          
        if(data) {
            console.log(data[0])
            messageTitle.value = 'Данные обновлены!', messageType.value = true 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
        } else {
            messageTitle.value = 'Произошла ошибка!', messageType.value = false 
            setTimeout(() => {
                messageTitle.value = null
            }, 3000) 
        }
    }


    /* показ заказнных услуг */    
    const { data: orders, error: ordersError } = await supabase
    .from('orders')
    .select('*, users(*)')
    .eq('userId', `${id.value}`) 
    
    
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
</script>