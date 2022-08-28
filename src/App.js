import "./App.css";
import MovieList from "./components/MovieList";
import NavbarPage from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Search from "./components/Search";
import Home from "./components/Home";
import MoreGenres from "./components/MoreGenres";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/rating" element={<MovieList />} />
          <Route path="/generos/:id" element={<MoreGenres />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="pelicula/:id" element={<MovieDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
