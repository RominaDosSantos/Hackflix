import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./MovieIndividual";
import InfiniteScroll from "react-infinite-scroll-component";
import RatingMovie from "./RatingMovie";
import Header from "./Header";

function MovieList() {
  const [movies, setMovies] = useState(null);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    //Este se ejecuta cuando cambiamos la pagina
    const getMovies = async () => {
      const data = await getMoviesFromAPI(page, rating);
      movies
        ? setMovies([...movies, ...data.results])
        : setMovies(data.results);
      setHasMore(page < data.total_pages);
    };
    getMovies();
  }, [page]);

  useEffect(() => {
    //Esta funcin se ejecuta cuando cambia el rating
    const getMovies = async () => {
      setPage(1);
      const data = await getMoviesFromAPI(page, rating);
      setMovies(data.results);
    };
    getMovies();
  }, [rating]);

  async function getMoviesFromAPI(currentPage, currentRating) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.REACT_APP_TMBD_API
    }&page=${currentPage}&vote_average.gte=${
      currentRating * 2 - 2
    }&include_adult=false&vote_count.gte=500`;
    const response = await axios.get(url);
    return response.data;
  }

  return (
    movies && (
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
      >
        <header id="headerTitle">
          <Header
            title="HACKFLIX"
            subtitle="¡Los últimos estrenos YA disponibles!"
          />
        </header>
        <RatingMovie rating={rating} setRating={setRating} className="rating" />
        <div className="movieList">
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
          {movies.length === 0 && (
            <p className="paragraphRating">
              Lo sentimos, no se encontraron películas con el rating solicitado
            </p>
          )}
        </div>
        {hasMore === false && (
          <p className="paragraphNoMoreResults">No hay mas resultados.</p>
        )}
      </InfiniteScroll>
    )
  );
}

export default MovieList;
