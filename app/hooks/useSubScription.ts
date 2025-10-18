import type { AsyncData } from "#app"

export type Subscription = {
    email?: string
    aldult?: boolean
}

export default createGlobalState(() => {

    const subscription = ref<Subscription>({})
    const postStatus = ref<AsyncData<any, any> | null>()

    const openModal = ref<boolean>(false)

    const open = () => {
        openModal.value = true
    }

    const close = () => {
        openModal.value = false
    }

    const postSubscription = async () => {
        const res = await useAsyncData(() => $fetch(
            'https://baidu.com',
            {
                method: 'POST',
                body: {
                    email: subscription.value.email,
                    label: {
                        aldult: subscription.value.aldult
                    }
                },
                headers: {
                    '': 'Bearer ',
                    type: ''
                }
            }
        ))
    }

    return {
        openModal,
        open,
        close,
        subscription
    }
})