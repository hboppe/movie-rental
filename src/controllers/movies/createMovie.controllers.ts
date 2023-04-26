import { Request, Response } from "express";
import { TMovie } from "../../interfaces/movies.interfaces";
import { moviesServices } from '../../services/movies/index';

const createMovie = async (req: Request, res: Response): Promise<Response<TMovie>> => {

  const movie: TMovie = await moviesServices.createMovie(req.body);

  return res.status(201).json(movie);
}

export default createMovie;