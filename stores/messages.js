export const useMessagesStore = defineStore("messages", () => {
    const messageTitle = useCookie('messageTitle')
    const messageType = useCookie('messageType')

    return {messageTitle, messageType}
})