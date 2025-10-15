import type { BackEndData, BackEndCard, BackEndRoulette, BackEndTruthOrDare } from "~~/shared/types/back-end";
import { cards } from "./cards/_index";
import { Language } from "~~/shared/types/languages";


const datas: BackEndCard[] | BackEndTruthOrDare[] = [
    ...cards
]

const getDatas = (lang: Language = 'en') => {
    return datas
        .filter(item => item.lang === lang)
        .map(item => {
            return {
                id: item.id,
                lang: item.lang,
                category: item.category,
                aldult: item.aldult,
                name: item.data.name,
                tags: item.data.tags,
                description: item.data.description,
                cardTotal: item.category === 'Card' ? item.data.contents.length : undefined
            } as BackEndData
        })
}


export {
    datas,
    getDatas
}