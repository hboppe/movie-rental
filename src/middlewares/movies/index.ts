import ensureDataIsValid from './ensureDataIsValid.middlewares';
import ensureMovieNameIsUnique from './ensureMovieNameIsUnique.middlewares';
import ensureMovieIdIsValid from './ensureMovieIdIsValid.middlewares';

export const moviesMiddlewares = {
  ensureDataIsValid,
  ensureMovieNameIsUnique,
  ensureMovieIdIsValid
}