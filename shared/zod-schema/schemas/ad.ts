import { z } from "zod/v4"

export const ad = z.object({
    adImageUrl: z.string().optional(),
    adUrl: z.string().optional()
}).optional()