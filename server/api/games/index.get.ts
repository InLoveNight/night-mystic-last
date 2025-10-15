import { GameCategory } from "~~/shared/types/category"
import { getDatas } from "../../data/games/_index"


export default defineEventHandler(async (event) => {

    const queries = getQuery<{
        category?: GameCategory,
        tag?: string
    }>(event)

    const datas = getDatas(event.context.lang)

    if (queries.category && queries.tag) {
        return datas.filter(item => item.category === queries.category && item.tags?.includes(queries.tag!))
    }

    if (queries.category) {
        return datas.filter(item => item.category === queries.category)
    }

    if (queries.tag) {
        return datas.filter(item => item.tags?.includes(queries.tag!))
    }

    return datas
})
