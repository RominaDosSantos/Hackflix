import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import MovieIndividual from "./MovieIndividual";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "use-debounce";
import Container from "react-bootstrap/Container";
import "../css/search.css";

function Search() {
  const [searchMovie, setSearchMovie] = useState("");
  const [debouncedSearch] = useDebounce(searchMovie, 300);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const getMovie = async () => {
      const data = await getMoviesFromAPI();
      setMovies([...movies, ...data.results]);
      setHasMore(page < data.total_pages);
    };
    getMovie();
  }, [page]);

  useEffect(() => {
    const getMovies = async () => {
      setPage(1);
      const data = await getMoviesFromAPI();
      setMovies(data.results);
    };
    getMovies();
  }, [debouncedSearch]);

  async function getMoviesFromAPI() {
    if (!debouncedSearch)
      return {
        results: [],
        total_pages: 2,
      };
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_API}&page=${page}&query=${debouncedSearch}&include_adult=false&vote_count.gte=1000`;
    const response = await axios.get(url);
    return response.data;
  }

  return (
    <>
      <Container>
        <InputGroup className="mb-3">
          <Button type="submit" id="buttonSearch">
            <AiOutlineSearch size={28} />
          </Button>
          <Form.Control
            id="inputSearch"
            placeholder="What are you looking for?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onSubmit={handleSubmit}
            value={searchMovie}
            //podemos controlarlo mas inlcuso poniendole al final de la linea siguiente un toUpperCase()
            onChange={(e) => {
              setSearchMovie(e.target.value);
              setQuery({ search: searchMovie });
            }}
          />
        </InputGroup>
      </Container>
      {movies.length === 0 && (
        <div className="divMenssageSearch">
          <div>
            {searchMovie === "" ? (
              <p>La búsqueda no arrojó coincidencias.</p>
            ) : (
              <p>La búsqueda de "{searchMovie}" no arrojó coincidencias.</p>
            )}
            <p>Sugerencias:</p>
          </div>
          <div>
            <ul>
              <li>Intenta con otras palabras claves</li>
              <li>
                Intenta con el título de una película, o con un nombre
                específico
              </li>
            </ul>
          </div>
        </div>
      )}
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
      >
        <div className="movieList">
          {movies.map(function (movie) {
            return <MovieIndividual key={movie.id} movie={movie} />;
          })}
        </div>
        {hasMore === false && (
          <p className="paragraphNoMoreResults">No hay mas resultados.</p>
        )}
      </InfiniteScroll>
    </>
  );
}
export default Search;
