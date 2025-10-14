import type { LocaleDataOption } from "~/types/some"
import { schemaCard } from "#shared/zod-schema"
import dexieDb, { execute } from "~/libs/dexie"

export const useLocaleCards = (
    options: LocaleDataOption = { immediate: false }
) => {
    const cards = ref<schemaCard.Card[]>([])
    const card = ref<schemaCard.Card>({
        name: '',
        contents: []
    })
    const cardContent = ref<schemaCard.CardContent>({
        content: '',
        time: 0
    })

    const actionCards = {
        insert: async () => (await execute(() => dexieDb.cards.add(toRaw(card.value)))).success,
        updateById: async (id: string) => {
            const { result } = await execute(() => dexieDb.cards.update(id, toRaw(card.value)))
            return !!result
        },
        queryAll: async () => {
            const { result } = await execute(() => dexieDb.cards.toArray())
            if (result) cards.value = result
        },
        queryById: async (id: string) => {
            const { success, result } = await execute(() => dexieDb.cards.get(id))
            if (success && result) {
                card.value = result
                return true
            }
            return false
        },
        deleteById: async (id: string) => {
            await dexieDb.cards.delete(id)
            await actionCards.queryAll()
        }
    }

    const actionContent = {
        insert: () => {
            card.value.contents.unshift({ ...toRaw(cardContent.value) })
        },
        updateByIndex: (index: number) => {
            card.value.contents.splice(index, 1, { ...toRaw(cardContent.value) })
        },
        deleteByIndex: (index: number) => {
            card.value.contents.splice(index, 1)
        },
        queryByIndex: (index: number) => {
            const res = card.value.contents[index]
            if (res) {
                cardContent.value = { ...res }
                return true
            }
            return false
        },
        reset: () => {
            cardContent.value = { content: '', time: 0 }
        }
    }

    if (options.immediate) {
        actionCards.queryAll()
    }

    return {
        cards,
        card,
        cardContent,
        actionCards,
        actionContent
    }
}