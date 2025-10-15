import { getDatas } from "../games/_index";
import { Language } from "~~/shared/types/languages";


const getTags = (category?: GameCategory, lang?: Language) => {
    const data = getDatas(lang)

    const tags: string[] = []

    if (category) {
        data.map(item => {
            if (item.category === category) {
                item.tags?.map(tag => {
                    if (!tags.includes(tag)) tags.push(tag)
                })
            }
        })
    } else {
        data.map(item => {
            item.tags?.map(tag => {
                if (!tags.includes(tag)) tags.push(tag)
            })
        })
    }

    return tags
}

export {
    getTags
}