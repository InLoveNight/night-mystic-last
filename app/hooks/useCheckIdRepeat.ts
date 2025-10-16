
import dexieDb, { execute } from "~/libs/dexie"


export default () => {

    const ids = ref<string[]>([])

    const queryIds = async () => {
        if (import.meta.client) {
            const { result: cardIds } = await execute(() => dexieDb.cards.toCollection().primaryKeys())

            cardIds?.map(item => {
                if (item && !ids.value.includes(item)) ids.value.push(item)
            })
        }
    }

    const check = (id?: string) => {
        if (!id) return false
        return ids.value.includes(id as string)
    }

    const refresh = async () => {
        await queryIds()
    }

    onMounted(() => {
        refresh()
    })


    return {
        check,
        refresh
    }
}


