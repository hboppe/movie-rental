import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Movie } from "../../entities"
import { AppError } from "../../error"
import { TMovie } from "../../interfaces/movies.interfaces"

const ensureMovieNameIsUnique = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  const moviesRepo: Repository<TMovie> = AppDataSource.getRepository(Movie);

  if(!req.body.name) return next();

  const foundMovie = await moviesRepo.findOneBy({
    name: req.body.name
  });

  console.log(req.body.name, foundMovie)

  if(foundMovie !== null) throw new AppError('Movie already exists.', 409); 
  
  return next()
}

export default ensureMovieNameIsUnique