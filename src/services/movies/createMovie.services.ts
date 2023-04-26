import { TMovie, TMoviesRequest } from "../../interfaces/movies.interfaces";
import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";

const createMovie = async (movieData: TMoviesRequest): Promise<TMovie> => {

  const movieRepo: Repository<TMovie> = AppDataSource.getRepository(Movie);
  const newMovie = movieRepo.create(movieData);
  await movieRepo.save(newMovie);
  
  return newMovie;
}

export default createMovie;