import Header from "./Header";
import Genres from "./Genres";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [movieGenres, setMovieGenres] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const dataGenres = await getGenresFromAPI();
      setMovieGenres(dataGenres.genres);
    };
    getMovie();
  }, []);
  async function getGenresFromAPI() {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMBD_API}`;
    const response = await axios.get(url);
    return response.data;
  }

  return (
    <>
      <header id="headerTitle">
        <Header
          title="HACKFLIX"
          subtitle="¡Los últimos estrenos YA disponibles!"
        />
      </header>
      {movieGenres.map(function (genre) {
        return <Genres id={genre.id} genre={genre.name} />;
      })}
    </>
  );
}

export default Home;
