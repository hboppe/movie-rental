import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMovie } from "../../interfaces/movies.interfaces";

const getAllMovies = async (queryParams: any) => {

  let {page, perPage, order, sort} = queryParams;

  page = Number(page);
  perPage = Number(perPage);

  if(!(perPage === parseInt(perPage) && perPage > 0 && perPage <= 5)) perPage = 5;
  if(!(page === parseInt(page) && page > 0)) page = 1;

  if(!(sort === 'price' || sort === 'duration')) sort = 'id';
  if(!(order === 'asc' || order === 'desc')) order = 'asc';

  const moviesRepo: Repository<TMovie> = AppDataSource.getRepository(Movie);

  const skipNMovies = (page - 1) * perPage;

  const allMovies = await moviesRepo.findAndCount({
    skip: skipNMovies,
    take: perPage,
    order: {
      [sort]: [order]
    }
  });

  return {
    prevPage: 
      skipNMovies > 0 ? 
      `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}` 
      : null,
    nextPage: 
      skipNMovies + perPage < allMovies[1] ? 
      `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`
      : null,
    count:  allMovies[1],
    data: allMovies[0]
  }
}

export default getAllMovies;