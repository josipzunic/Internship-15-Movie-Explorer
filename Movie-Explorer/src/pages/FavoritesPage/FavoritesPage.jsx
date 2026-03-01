import { MovieCard } from "../../components/MovieCard/MovieCard";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import { movies } from "../../data/movies";
import styles from "../MoviePage/MoviePage.module.css";

export const FavoritesPage = ({ favorites, setFavorites }) => {
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  const handleFavorite = (movie) => {
    if (favorites.includes(movie.id)) {
      setFavorites(favorites.filter((id) => id !== movie.id));
    } else {
      setFavorites([...favorites, movie.id]);
    }
  };

  return (
    <div className={styles.movieContainer}>
      {favoriteMovies.length !== 0 ? (
        favoriteMovies.map((movie) => {
          return (
            <div>
              <Link
                key={movie.id}
                className={styles.link}
                to={routes[3].route.replace(":id", movie.id)}
              >
                <MovieCard
                  movieObject={movie}
                  isFavorite={favorites.includes(movie.id)}
                ></MovieCard>
              </Link>
              <button onClick={() => handleFavorite(movie)}>Unfavorite</button>
            </div>
          );
        })
      ) : (
        <div>"There are no favorited movies"</div>
      )}
    </div>
  );
};
