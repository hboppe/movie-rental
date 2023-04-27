import { Router } from "express";
import { moviesMiddlewares } from "../middlewares/movies";
import { moviesSchemaRequest, updateMovieRequest } from "../schemas/movies.schema";
import { moviesControllers } from '../controllers/movies/index';

const moviesRouter: Router = Router();

moviesRouter.post(
  '',
  moviesMiddlewares.ensureMovieNameIsUnique,
  moviesMiddlewares.ensureDataIsValid(moviesSchemaRequest),
  moviesControllers.createMovie
)

moviesRouter.get(
  '',
  moviesControllers.getAllMovies
)

moviesRouter.patch(
  '/:id',
  moviesMiddlewares.ensureMovieIdIsValid,
  moviesMiddlewares.ensureDataIsValid(updateMovieRequest),
  moviesMiddlewares.ensureMovieNameIsUnique,
  moviesControllers.updateMovie
)

export default moviesRouter