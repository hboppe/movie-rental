import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMovie } from "../../interfaces/movies.interfaces";

const deleteMovie = async (movieId: number): Promise<void> => {
  const movieRepo: Repository<TMovie> = AppDataSource.getRepository(Movie);

  const foundMovie: TMovie | null = await movieRepo.findOneBy({
    id: movieId
  })

  await movieRepo.remove(foundMovie!);
}

export default deleteMovie;