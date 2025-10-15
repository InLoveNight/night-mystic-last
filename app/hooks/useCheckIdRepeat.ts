
import dexieDb, { execute } from "~/libs/dexie"


export default () => {

    const ids = ref<string[]>([])

    const queryIds = async () => {
        const { result: cardIds } = await execute(() => dexieDb.cards.toCollection().primaryKeys())
        cardIds?.map(item => ids.value.push(item!))
    }

    const check = (id?: string) => {
        queryIds().then()
        return ids.value.includes(id as string)
    }

    const refresh = async () => {
        await queryIds()
    }

    refresh()


    return {
        check,
        refresh
    }
}


