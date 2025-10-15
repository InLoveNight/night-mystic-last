
import dexieDb, { execute } from "~/libs/dexie"


export default () => {

    const ids = ref<string[]>([])

    onMounted(async () => {
        const { result: cardIds } = await execute(() => dexieDb.cards.toCollection().primaryKeys())

        cardIds?.map(item => ids.value.push(item!))
    })

    const check = (id?: string) => {
        return ids.value.includes(id as string)
    }


    return {
        check
    }
}


