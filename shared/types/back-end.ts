import type { Language } from "./languages"
import type { GameCategory } from "./category"
import { schemaCard, schemaTruthOrDare } from "../zod-schema"

export type BackEndData = {
    id: string
    lang: Language
    category: GameCategory
    name: string
    aldult?: boolean
    tags?: string[]
    description: string
    cardTotal?: number
    truthTotal?: number
    dareTotal?: number
    diceTotal?: number
}

export type BackEndCard = {
    id: string
    lang: Language
    category: GameCategory
    aldult?: boolean,
    data: Omit<schemaCard.Card, 'id'>
}

export type BackEndTruthOrDare = {
    id: string
    lang: Language
    category: GameCategory
    aldult?: boolean,
    data: Omit<schemaTruthOrDare.TruthOrDare, 'id'>
}

export type BackEndRoulette = {}