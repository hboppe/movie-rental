import ensureDataIsValid from './ensureDataIsValid.middlewares';
import ensureMovieNameIsUnique from './ensureMovieNameIsUnique.middlewares';

export const moviesMiddlewares = {
  ensureDataIsValid,
  ensureMovieNameIsUnique
}