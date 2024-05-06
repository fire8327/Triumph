export const useUserStore  = defineStore("user", () => {
    const authenticated = useCookie('authenticated')
    const id = useCookie('id')
    const role = useCookie('role')
    authenticated.value = false

    return {authenticated, id, role}
})