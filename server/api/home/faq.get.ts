import filterAbout from "~~/server/data/home/about"

export default defineEventHandler(async (event) => {
    return filterAbout(event.context.lang)
})
