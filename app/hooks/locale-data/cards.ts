import type { LocaleDataOption } from "~/types/some"
import { schemaCard } from "#shared/zod-schema"


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

    const actionCards = {}
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
            cardContent.value = { content: '' }
        }
    }

    return {
        cards,
        card,
        cardContent,
        actionCards,
        actionContent
    }
}