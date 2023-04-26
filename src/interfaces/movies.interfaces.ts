import { z } from "zod";
import { moviesSchema, moviesSchemaRequest } from "../schemas/movies.schema";

type TMoviesRequest = z.infer<typeof moviesSchemaRequest>
type TMovie = z.infer<typeof moviesSchema>

export {
  TMoviesRequest,
  TMovie
}