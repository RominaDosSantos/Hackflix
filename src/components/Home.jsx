import Header from "./Header";
import Genres from "./Genres";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoArrowUp } from "react-icons/go";
import { RotatingLines } from "react-loader-spinner";

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <header id="headerTitle">
        <Header
          title="HACKFLIX"
          subtitle="¡Los últimos estrenos YA disponibles!"
        />
      </header>
      {movieGenres.map(function (genre) {
        return (
          <>
            <Genres id={genre.id} genre={genre.name} />;
          </>
        );
      })}
      <div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            // padding: "1rem 2rem",
            fontSize: "70px",
            bottom: "40px",
            right: "40px",
            backgroundColor: "transparent",
            color: "#db1c27",
            textAlign: "center",
            border: "0",
          }}
        >
          <GoArrowUp />
        </button>
      </div>
    </>
  );
}

export default Home;
