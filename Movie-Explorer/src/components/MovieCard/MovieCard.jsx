import styles from "./MovieCard.module.css";

export const MovieCard = ({ movieObject, isFavorite }) => {
  return (
    <div className={styles.movieCard}>
      <div>
        <img
          className={styles.image}
          src={movieObject.imageUrl}
          alt={movieObject.imageAlt}
        />
      </div>
      <div className={styles.movieInfo}>
        <h2 className={styles.title}>
          {isFavorite ? (
            <span className={styles.favoriteIcon}>&#9733;</span>
          ) : null}
          {movieObject.name}
        </h2>
        <p className={styles.paragraph}>
          {" "}
          {movieObject.year} | {movieObject.runtime}
        </p>
      </div>
    </div>
  );
};
