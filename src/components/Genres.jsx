import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";

import "../css/genres.css";

function Genres({ id, genre }) {
  const [movies, setMovies] = useState([]);
  const genreWordCutFirstLetter = genre.substring(0, 1);
  const genreWordCut = genre.substring(1, genre.length);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getMoviesFromAPI();
      setMovies(data.results);
    };
    getMovies();
  }, []);

  async function getMoviesFromAPI() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMBD_API}&include_adult=false&vote_count.gte=500&with_genres=${id}`;
    const response = await axios.get(url);
    return response.data;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div style={{ padding: "20px 0 0 0" }}></div>
      <Container>
        <div className="titleGenrseCarousel">
          <h2 className="genreWordCut">
            <span className="genreWordCutFirstLetter">
              {genreWordCutFirstLetter}
            </span>
            {genreWordCut}
          </h2>
        </div>
      </Container>
      <Carousel responsive={responsive} infinite={true}>
        {movies.map(function (movie) {
          <span aria-hidden="true" className="carousel-control-next-icon" />;
          return (
            <Link to={"/pelicula/" + movie.id}>
              <div className="carouselDiv">
                <img
                  className="d-inline imgCarousel"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={"90%"}
                  alt={movie.title}
                />
              </div>
            </Link>
          );
        })}
      </Carousel>
    </>
  );
}

export default Genres;
