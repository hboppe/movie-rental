import { Router } from "express";
import { moviesMiddlewares } from "../middlewares/movies";
import { moviesSchemaRequest } from "../schemas/movies.schema";
import { moviesControllers } from '../controllers/movies/index';

const moviesRouter = Router();

moviesRouter.post(
  '',
  moviesMiddlewares.ensureDataIsValid(moviesSchemaRequest),
  moviesMiddlewares.ensureMovieNameIsUnique,
  moviesControllers.createMovie
)

export default moviesRouter