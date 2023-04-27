import { z } from "zod";
import { moviesSchema, moviesSchemaRequest, updateMovieRequest } from "../schemas/movies.schema";

type TMoviesRequest = z.infer<typeof moviesSchemaRequest>
type TMovie = z.infer<typeof moviesSchema>
type TGetAllMoviesParams = {
  page: string | undefined,
  perPage: string | undefined,
  order: string | undefined,
  sort: string | undefined
}
type TUpdateMovieRequest = z.infer<typeof updateMovieRequest>

export {
  TMoviesRequest,
  TMovie,
  TGetAllMoviesParams,
  TUpdateMovieRequest
}