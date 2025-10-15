import { z } from "zod/v4"

export const content = z.object({
    content: z.string(),
    time: z.number().nullable().optional()
})

export const game = z.object({
    id: z.uuidv4().optional(),
    name: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    truths: z.array(content),
    dares: z.array(content)
})

export type TruthOrDare = z.infer<typeof game>
export type TruthOrDareContent = z.infer<typeof content>
export type Category = 'truth' | 'dare'
export type Categories = 'truths' | 'dares'