import { Request, Response } from "express";
import { moviesServices } from "../../services/movies";

const getAllMovies = async (req: Request, res: Response): Promise<Response>=> {

  const allMovies = await moviesServices.getAllMovies(req.query);

  return res.status(200).json(allMovies)
}

export default getAllMovies;