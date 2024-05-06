export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    const authenticated = useCookie("authenticated")

    if(authenticated.value) {
        userStore.authenticated = true
    }

    if (authenticated.value && to?.path === '/auth' && to?.path === '/reg') {
        return navigateTo('/')
    }

   /*  if(!authenticated.value && (to?.path === '/profile' || to?.path === '/cart')) {
        return navigateTo('/')
    } */
})