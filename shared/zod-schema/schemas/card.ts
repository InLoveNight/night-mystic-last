import { z } from "zod/v4"
import { ad } from "./ad"

export const content = z.object({
    title: z.string().optional(),
    content: z.string(),
    time: z.number().optional(),
    imageUrl: z.string().optional(),
    ad,
})

export const game = z.object({
    id: z.uuidv4().optional(),
    name: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    ad,
    contents: z.array(content)
})

export type Card = z.infer<typeof game>
export type CardContent = z.infer<typeof content>