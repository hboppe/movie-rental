import createMovie from './createMovie.controllers';
import getAllMovies from './getAllMovies.controllers';
import updateMovie from './updateMovie.controllers';
import deleteMovie from './deleteMovie.controllers';

export const moviesControllers = {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie
}