import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { AppError } from "../../error";
import { TMovie } from "../../interfaces/movies.interfaces";

const ensureMovieIdIsValid = async (req: Request, res: Response, next: NextFunction) => {
  const movieId: number = Number(req.params.id);

  const movieRepo: Repository<TMovie> = AppDataSource.getRepository(Movie);

  const foundMovie: TMovie | null = await movieRepo.findOneBy({
    id: movieId
  })

  if(!foundMovie) throw new AppError('Movie not found', 409);

  return next();
}

export default ensureMovieIdIsValid;