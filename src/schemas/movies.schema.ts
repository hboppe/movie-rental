import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50, {message: 'Must be 50 or fewer characters long'}),
  description: z.string().nullish(),
  duration: z.number(),
  price: z.number()
})

const moviesSchemaRequest = moviesSchema.omit({
  id: true
})

export {
  moviesSchemaRequest,
  moviesSchema
}