import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieIndividual from "./MovieIndividual";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

function MoreGenres() {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      const data = await getMoviesFromAPI();
      setMovies([...movies, ...data.results]);
      setHasMore(page < data.total_pages);
    };
    getMovie();
  }, [page]);

  async function getMoviesFromAPI() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMBD_API}&page=${page}&include_adult=false&vote_count.gte=500&with_genres=${params.id}`;
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
        <Container>
          <span className="btnBack" style={{ marginBottom: "20px" }}>
            <Link to="/">
              <BsArrowLeft /> Back
            </Link>
          </span>
        </Container>
        <div className="movieList">
          {movies.map(function (movie) {
            return <MovieIndividual key={movie.id} movie={movie} />;
          })}
        </div>
        {hasMore === false && (
          <p className="paragraphNoMoreResults">No hay mas resultados.</p>
        )}
      </InfiniteScroll>
    )
  );
}

export default MoreGenres;
