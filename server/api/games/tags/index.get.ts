import { getTags } from "~~/server/data/tags/_index"
import { GameCategory } from "~~/shared/types/category"

export default defineEventHandler(async (event) => {
    const category = getQuery<{ category?: GameCategory }>(event).category
    return getTags(category, event.context.lang)
})