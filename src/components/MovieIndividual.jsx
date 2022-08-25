import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../css/movieIndividual.css";

function MovieIndividual({ movie }) {
  return (
    <>
      <div className="movieIndividual">
        <Card id="movieIndividualCard">
          <Link to={"/pelicula/" + movie.id}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              height="400px"
              id="imgCard"
            />
          </Link>
        </Card>
      </div>
    </>
  );
}

export default MovieIndividual;
