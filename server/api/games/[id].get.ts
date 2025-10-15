import { datas } from "~~/server/data/games/_index"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    if (id) {
        const res = datas.filter(item => item.id === id)
        if (res.length) {
            return res[0]
        }
    }

    return createError({ statusCode: 404 })
})
