import { z } from "zod/v4"
import { ad } from "./ad"

export const cardContent = z.object({
    content: z.string(),
    time: z.number().optional(),
    ad,
})

export const card = z.object({
    id: z.uuidv4().optional(),
    name: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    ad,
    contents: z.array(cardContent)
})

export type Card = z.infer<typeof card>
export type CardContent = z.infer<typeof cardContent>