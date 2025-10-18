export default createGlobalState(() => {

    const openModal = ref<boolean>(false)

    const open = () => {
        openModal.value = true
    }

    const close = () => {
        openModal.value = false
    }




    return { openModal, open, close }
})