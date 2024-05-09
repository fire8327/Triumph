<template>
    <div class="flex flex-col gap-6 text-xl">
        <p class="font-Comfortaa text-3xl">Наши услуги</p>
        <p class="opacity-70">Мы предлагаем широкий спектр услуг для успешной реализации вашего мероприятия. Независимо от его масштаба и характера, наша команда готова обеспечить вам все необходимое для создания незабываемого и эффективного события.</p>
    </div>
    <div class="flex flex-col gap-6 text-xl">
        <p class="font-Comfortaa text-2xl text-[#b684b3]">Детские праздники</p>
        <div class="flex max-lg:flex-col gap-6">
            <img src="/images/services/1.jpg" alt="" class="lg:w-1/4 lg:aspect-[7/10] rounded-xl max-lg:aspect-video object-cover">
            <div class="flex flex-col gap-6 grow">
                <p class="opacity-70">Загляните в мир волшебства и радости с нашими детскими праздниками! Мы создаем веселые и яркие события, наполненные улыбками и волнением детства. Наша команда профессионалов внимательно прислушивается к пожеланиям маленьких гостей, чтобы каждый детский праздник стал незабываемым приключением. От тематических декораций до захватывающих развлечений и вкуснейших угощений – мы заботимся о каждой детали, чтобы создать праздник, который будет радовать как маленьких гостей, так и их родителей.</p>
                <p class="opacity-70 font-Comfortaa">Преимущества:</p>
                <ul class="list-inside list-disc marker:text-[#b684b3] text-[#292929]/70">
                    <li><span class="text-[#b684b3] font-Comfortaa">Профессиональная организация:</span> Родители могут расслабиться, зная, что профессиональная команда заботится о каждой детали мероприятия.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Тематические вечеринки:</span> Мы предлагаем широкий выбор тематических вечеринок, чтобы создать атмосферу волшебства и веселья для маленьких гостей.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Безопасность:</span> Мы обеспечиваем безопасность всех участников мероприятия, следя за тем, чтобы игры и развлечения были безопасны и подходили для детей.</li>
                </ul>
                <p class="font-Comfortaa text-3xl opacity-80">{{ prices.kids.toLocaleString() }}₽</p>
                <button v-if="authenticated && role != 'admin'" @click="isServicesFormShow = true, selectService('Детские праздники', prices.kids)" class="w-fit text-center py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Заказать праздник</button>
                <p v-else class="text-base opacity-70 italic">Для заказа войдите в аккаунт/зарегистрируйтесь</p>                
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6 text-xl">
        <p class="font-Comfortaa text-2xl text-[#b684b3]">Корпоратив</p>
        <div class="flex max-lg:flex-col gap-6">
            <img src="/images/services/2.jpg" alt="" class="lg:w-1/4 lg:aspect-[7/10] rounded-xl max-lg:aspect-video object-cover">
            <div class="flex flex-col gap-6 grow">
                <p class="opacity-70">Поднимите бокал за успехи вашего бизнеса с нашими корпоративными мероприятиями! Мы предлагаем инновационные и креативные решения для организации корпоративных событий, которые не только укрепляют командный дух, но и отражают уникальную культуру вашей компании. Наша команда экспертов берет на себя всю организационную работу – от выбора идеального места до разработки интересной программы и впечатляющей декорации. Доверьтесь нам, и мы сделаем ваше корпоративное событие незабываемым и вдохновляющим для всех его участников.</p>
                <p class="opacity-70 font-Comfortaa">Преимущества:</p>
                <ul class="list-inside list-disc marker:text-[#b684b3] text-[#292929]/70">
                    <li><span class="text-[#b684b3] font-Comfortaa">Укрепление команды:</span> Корпоративные мероприятия помогают укрепить командный дух и повысить мотивацию сотрудников.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Профессиональный подход:</span> Мы предлагаем индивидуальный подход к каждому корпоративному мероприятию, учитывая специфику бизнеса и потребности клиента.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Превосходное качество:</span> Наша команда стремится к созданию высококачественного мероприятия с оригинальными идеями и инновационными решениями.</li>
                </ul>
                <p class="font-Comfortaa text-3xl opacity-80">{{ prices.companyParty.toLocaleString() }}₽</p>
                <button v-if="authenticated && role != 'admin'" @click="isServicesFormShow = true, selectService('Корпоратив', prices.companyParty)" class="w-fit text-center py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Заказать праздник</button>
                <p v-else class="text-base opacity-70 italic">Для заказа войдите в аккаунт/зарегистрируйтесь</p>                
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6 text-xl">
        <p class="font-Comfortaa text-2xl text-[#b684b3]">Свадьба</p>
        <div class="flex max-lg:flex-col gap-6">
            <img src="/images/services/3.jpg" alt="" class="lg:w-1/4 lg:aspect-[7/10] rounded-xl max-lg:aspect-video object-cover">
            <div class="flex flex-col gap-6 grow">
                <p class="opacity-70">Ваша история любви заслуживает волшебного начала, и мы поможем вам создать свадебное торжество, которое будет отражать вашу уникальность и стиль. Наша команда специализируется на создании романтичных и неповторимых свадебных мероприятий, где каждая деталь пропитана любовью и заботой. Мы обеспечим вас профессиональным планированием, изысканной декорацией, великолепным кейтерингом и развлечениями, которые подарят вам и вашим гостям незабываемые впечатления. Позвольте нам превратить ваши мечты в реальность и сделать вашу свадьбу самым счастливым днем вашей жизни.</p>
                <p class="opacity-70 font-Comfortaa">Преимущества:</p>
                <ul class="list-inside list-disc marker:text-[#b684b3] text-[#292929]/70">
                    <li><span class="text-[#b684b3] font-Comfortaa">Персонализация:</span> Мы уделяем особое внимание каждой детали, чтобы ваша свадьба отражала вашу индивидуальность и уникальность.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Эксклюзивность:</span> Мы предлагаем доступ к эксклюзивным местам и услугам, чтобы сделать вашу свадьбу по-настоящему незабываемой.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Управление стрессом:</span> Наша команда помогает управлять всеми аспектами планирования свадьбы, освобождая вас от стресса и позволяя наслаждаться этим важным моментом в вашей жизни.</li>
                </ul>
                <p class="font-Comfortaa text-3xl opacity-80">{{ prices.wedding.toLocaleString() }}₽</p>
                <button v-if="authenticated && role != 'admin'" @click="isServicesFormShow = true, selectService('Свадьба', prices.wedding)" class="w-fit text-center py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Заказать праздник</button>
                <p v-else class="text-base opacity-70 italic">Для заказа войдите в аккаунт/зарегистрируйтесь</p>                
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6 text-xl">
        <p class="font-Comfortaa text-2xl text-[#b684b3]">Праздник под ключ</p>
        <div class="flex max-lg:flex-col gap-6">
            <img src="/images/services/4.jpg" alt="" class="lg:w-1/4 lg:aspect-[7/10] rounded-xl max-lg:aspect-video object-cover">
            <div class="flex flex-col gap-6 grow">
                <p class="opacity-70">Вам нужно только расслабиться и наслаждаться моментом, когда вы выбираете наш праздник под ключ. Наша команда берет на себя всю ответственность за планирование и организацию вашего события, начиная с концепции и заканчивая выполнением всех деталей. Мы учитываем ваши предпочтения и пожелания, чтобы создать персонализированный праздник, который будет отражать вашу уникальность и стиль. Позвольте нам взять на себя все хлопоты, чтобы ваше событие прошло гладко и незабываемо.</p>
                <p class="opacity-70 font-Comfortaa">Преимущества:</p>
                <ul class="list-inside list-disc marker:text-[#b684b3] text-[#292929]/70">
                    <li><span class="text-[#b684b3] font-Comfortaa">Полное планирование:</span> Мы берем на себя всю работу по планированию и координации, от начала до конца, чтобы вы могли расслабиться и наслаждаться моментом.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Экономия времени и ресурсов:</span> Мы помогаем оптимизировать расходы и время, предлагая комплексные пакеты услуг по выгодным ценам.</li>
                    <li><span class="text-[#b684b3] font-Comfortaa">Индивидуальный подход:</span> Мы учитываем ваши предпочтения и желания, создавая персонализированный праздник, который отражает ваш стиль и вкус.</li>
                </ul>
                <p class="font-Comfortaa text-3xl opacity-80">{{ prices.readyMade.toLocaleString() }}₽</p>
                <button v-if="authenticated && role != 'admin'" @click="isServicesFormShow = true, selectService('Праздник под ключ', prices.readyMade)" class="w-fit text-center py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Заказать праздник</button>
                <p v-else class="text-base opacity-70 italic">Для заказа войдите в аккаунт/зарегистрируйтесь</p>                
            </div>
        </div>
    </div>
    <div @click="isServicesFormShow = false" class="fixed inset-0 bg-black/30 z-[5] transition-all duration-500" :class="{'-translate-x-full' : !isServicesFormShow}"></div>
    <div class="fixed top-1/2 -translate-y-1/2 left-1/2 z-[6] transition-all duration-50 w-full px-[15px] flex items-center justify-center text-xl" :class="isServicesFormShow ? '-translate-x-1/2' : 'translate-x-[3000px]'">
        <FormKit @submit="serviceOrder" type="form" form-class="flex flex-col gap-5 w-full max-w-[500px] px-5 py-7 bg-white rounded-[30px] relative" messages-class="hidden" :actions="false">
            <button type="button" @click="isServicesFormShow = false" class="absolute top-2 right-4">
                <Icon class="text-5xl" name="material-symbols-light:close-small-rounded"/>
            </button>
            <p class="font-Comfortaa text-2xl text-[#b684b3]">Заказ мероприятия</p>
            <div class="flex flex-col gap-4 mt-2.5">
                <FormKit v-model="servicesForm.phone" type="text" name="Телефон" validation="required|length:11" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" input-class="px-4 py-1 border border-[#b684b3] focus:outline-none rounded-[20px] w-full" placeholder="Телефон"/>
                <FormKit v-model="servicesForm.service" type="select" name="Выбранная услуга" validation="required" :options="['Детские праздники','Корпоратив','Свадьба','Праздник под ключ']" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" input-class="px-4 py-1 border border-[#b684b3] focus:outline-none rounded-[20px] w-full" placeholder="Выбранная услуга"/>
                <FormKit v-model="servicesForm.serviceDesc" type="textarea" name="Описание мероприятия" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" input-class="px-4 py-1 border border-[#b684b3] focus:outline-none rounded-[20px] w-full" placeholder="Кратко опишите своё мероприятие"/>
                <FormKit v-model="servicesForm.peopleCount" type="text" name="Количество человек" validation="required|number" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" input-class="px-4 py-1 border border-[#b684b3] focus:outline-none rounded-[20px] w-full" placeholder="Количество человек"/>
                <FormKit v-model="servicesForm.date" type="date" name="Дата проведения" validation="required" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" input-class="px-4 py-1 border border-[#b684b3] focus:outline-none rounded-[20px] w-full" label="Дата проведения" label-class="opacity-80 font-Comfortaa"/>
                <FormKit v-model="servicesForm.additional" type="checkbox" name="Дополнительные услуги" :options="['Фотограф', 'Ведущий', 'Кейтеринг', 'Украшения', 'Вынос торта']" messages-class="text-[#E9556D] font-Comfortaa text-base mt-2" input-class="px-4 py-1 border border-[#b684b3] focus:outline-none rounded-[20px] mr-5" legend-class="opacity-80 font-Comfortaa" label="Дополнительные услуги"/>
            </div>
            <button class="w-fit text-center mx-auto py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Оформить</button>
            <p class="text-xs opacity-70">*Конечная стоимость может меняться в зависимости от выбранных услуг</p>
        </FormKit>    
    </div>
</template>

<script setup>
    /* цена на мероприятия */
    const prices = ref({
        kids: 20000,
        companyParty: 40000,
        wedding: 50000,
        readyMade: 30000
    })

    
    /* показ формы и создание полей */
    const isServicesFormShow = ref(false)
    const servicesForm = ref({
        phone: "",
        service: "",
        serviceDesc: "",
        price: null,
        additional: "",
        date: "",
        peopleCount: ""
    })


    /* выбор услуги */
    const selectService = (service, price) => {
        servicesForm.value.service = service
        servicesForm.value.price = price
    }


    /* проверка входа */
    const { authenticated, role, id } = storeToRefs(useUserStore())


    /* подключение БД и создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())
    const supabase = useSupabaseClient() 
    const serviceOrder = async () => {
        const { data, error } = await supabase
        .from('orders')
        .insert([
            { userId: `${id.value}`, title: `${servicesForm.value.service}`, desc: `${servicesForm.value.serviceDesc}`, phone:`${servicesForm.value.phone}`, price: servicesForm.value.price, additional: `${servicesForm.value.additional}`, date: `${new Date(servicesForm.value.date).toLocaleDateString()}`, peopleCount: `${servicesForm.value.peopleCount}`},
        ])
        .select()

        if (data) {
            console.log(data[0])
            messageTitle.value = 'Успешное оформление!', messageType.value = true 
            isServicesFormShow.value = false
            servicesForm.value.phone = ""
            servicesForm.value.service = ""
            servicesForm.value.serviceDesc = ""
            servicesForm.value.price = null
            servicesForm.value.additional = ""
            servicesForm.value.date = ""
            servicesForm.value.peopleCount = ""
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
</script>