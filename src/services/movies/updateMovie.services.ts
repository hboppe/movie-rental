import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMovie, TUpdateMovieRequest } from "../../interfaces/movies.interfaces";

const updateMovie = async (movieId: number, updateData: TUpdateMovieRequest): Promise<TMovie> => {

  const movieRepo: Repository<TMovie> = AppDataSource.getRepository(Movie);

  const oldDataMovie: TMovie | null = await movieRepo.findOneBy({
    id: movieId
  });
  
  const updatedMovie: TMovie =  movieRepo.create({
    ...oldDataMovie, 
    ...updateData
  } as TMovie)

  await movieRepo.save(updatedMovie)

  return updatedMovie;
}

export default updateMovie;