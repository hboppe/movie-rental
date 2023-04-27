import createMovie from './createMovie.services';
import getAllMovies from './getAllMovies.services';
import updateMovie from './updateMovie.services';
import deleteMovie from './deleteMovie.services';

export const moviesServices = {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie
}