import { Request, Response } from "express";
import { moviesServices } from "../../services/movies";

const updateMovie = async (req: Request, res: Response): Promise<Response> => {
  const movieId: number = Number(req.params.id);

  console.log(req.body)

  const updatedMovie = await moviesServices.updateMovie(movieId, req.body);
  console.log(`NO CONTROLLER`, updatedMovie)

  return res.status(200).json(updatedMovie);
}

export default updateMovie;