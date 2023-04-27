import { Request, Response } from 'express';
import { moviesServices } from '../../services/movies/index';

const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
  const movieId: number = Number(req.params.id);

  await moviesServices.deleteMovie(movieId);

  return res.status(204).json();
}

export default deleteMovie;