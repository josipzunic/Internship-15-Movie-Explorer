import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../data/movies";
import styles from "./MovieDetailsPage.module.css";
import { useNavigate } from "react-router-dom";


export const MovieDetailsPage = () => {
  const params = useParams();
  let navigate = useNavigate();

  const movie = useMemo(
    () => movies.find((movie) => movie.id === Number(params.id)),
    [params.id],
  );

  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => navigate(-1)}>&#8592;</button>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={movie.imageUrl}
          alt={movie.imageAlt}
        />
      </div>
      <div className={styles.information}>
        <h2>
          <span className={styles.star}> &#9733; </span>
          {movie.name}
        </h2>
        <p>{movie.year}</p>
        <p>{movie.runtime}</p>
        <h3>Synopsis: </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          deserunt delectus blanditiis magnam nam incidunt dolores explicabo
          odio neque. Ipsum itaque fuga ad animi corrupti ut ducimus architecto
          repellat. Laudantium.
        </p>
        <button>
          {movie.isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
};
