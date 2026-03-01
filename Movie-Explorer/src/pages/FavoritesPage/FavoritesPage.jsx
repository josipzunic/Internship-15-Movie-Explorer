import { MovieCard } from "../../components/MovieCard/MovieCard";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import { movies } from "../../data/movies";
import styles from "./FavoritesPage.module.css";

export const FavoritesPage = ({ favorites, setFavorites }) => {
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  const handleFavorite = (movie) => {
    setFavorites(favorites.filter((id) => id !== movie.id));
  };

  return (
    <div className={styles.favoritesContainer}>
      {favoriteMovies.length !== 0 ? (
        favoriteMovies.map((movie) => (
          <div key={movie.id} className={styles.favoriteItem}>
            <Link
              className={styles.link}
              to={routes[3].route.replace(":id", movie.id)}
            >
              <MovieCard
                movieObject={movie}
                isFavorite={favorites.includes(movie.id)}
              />
            </Link>
            <button
              className={styles.unfavoriteButton}
              onClick={() => handleFavorite(movie)}
            >
              Unfavorite
            </button>
          </div>
        ))
      ) : (
        <p className={styles.emptyMessage}>There are no favorited movies.</p>
      )}
    </div>
  );
};
