import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    isDraft: z.boolean().default(false),
    pubDate: z.string().transform((str) => new Date(str)),
    image: z.string().optional()
  })
})

export const collections = { blog }
