import { Language } from "~~/shared/types/languages"

export default defineEventHandler(async (event) => {
    const lang = getCookie(event, 'night-mystic-lang') ?? 'en'
    event.context.lang = lang as Language
})
