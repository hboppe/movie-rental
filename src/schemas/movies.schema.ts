import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().gt(0),
  price: z.number().gt(0)
})

const moviesSchemaRequest = moviesSchema.omit({
  id: true
})

export {
  moviesSchemaRequest,
  moviesSchema
}