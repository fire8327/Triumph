<template>
    <FormKit type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center grow text-xl">
        <p class="text-3xl font-Comfortaa text-[#b684b3]">Регистрация</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Фамилия"/>
            <FormKit type="text" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Имя"/>
            <FormKit type="text" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Отчество"/>
        </div>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" validation="required" messages-class="text-[#E9556D] font-Comfortaa" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="Логин"/>
            <FormKit type="password" validation="required|length:6" messages-class="text-[#E9556D] font-Comfortaa" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#b684b3] rounded-xl focus:outline-none w-full" placeholder="••••••"/>
        </div>
        <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#b684b3] border border-[#b684b3] text-white transition-all duration-500 hover:text-[#b684b3] hover:bg-transparent">Регистрация</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-[#b684b3]"></div>  
            <p class="font-Comfortaa text-[#b684b3]">или</p>
            <div class="w-1/3 h-px bg-[#b684b3]"></div>  
        </div>
        <NuxtLink to="/auth" class="w-[160px] text-center py-0.5 px-4 rounded-full hover:bg-[#b684b3] border border-[#b684b3] hover:text-white transition-all duration-500 text-[#b684b3] bg-transparent">Вход</NuxtLink>
    </FormKit>
</template>

<script setup>

</script>