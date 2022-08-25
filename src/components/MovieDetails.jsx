import { useParams } from "react-router-dom";
import "../css/movieDetails.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [movieGenres, setmovieGenres] = useState([]);
  const [video, setVideo] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const data = await getMovieFromAPI();
      setMovie(data);
      setmovieGenres(data.genres);
      setVideo(
        data.videos.results.find(
          (element) => element.type.toLowerCase() === "Trailer".toLowerCase()
        ).key
      );
    };
    getMovie();
  }, []);

  async function getMovieFromAPI() {
    let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMBD_API}&append_to_response=videos&vote_count.gte=500`;
    const response = await axios.get(url);
    return response.data;
  }

  return (
    <>
      <div className="trailerDiv">
        <iframe
          id="iframeTrailer"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video}?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&widgetid=3&playlist=${video}&include_adult=false`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media;"
        />
      </div>
      <Container>
        <Row>
          <Col sm={5} md={4} lg={3} xxl={2}>
            <div className="datesOfMovies">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                height="290px"
              />
            </div>
          </Col>
          <Col sm={7} md={8} lg={9} xxl={10}>
            {movie.tagline && (
              <div className="h2TitleMovie">
                <h2>"{movie.tagline}"</h2>
              </div>
            )}
            <div className="moviesDates">
              <h3>{movie.title}</h3>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="read-only"
                  value={movie.vote_average / 2}
                  readOnly
                  className="ratingStars"
                />
              </Box>
              <p>{movie.overview}</p>
              <div className="divMinutesGenres">
                <div>
                  <p>{movie.runtime} minutes</p>
                </div>
                <div>
                  {movieGenres.map(function (movieGenre) {
                    return (
                      <p className="paragraphMovieGenres">
                        {movieGenre.name},{" "}
                      </p>
                    );
                  })}
                </div>
              </div>
              <span className="btnBack">
                <Link to="/">
                  <BsArrowLeft /> Volver
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MovieDetails;
