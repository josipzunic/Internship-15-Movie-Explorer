import styles from "./MovieCard.module.css";

export const MovieCard = ({ movieObject }) => {
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
        <h2>{movieObject.name}</h2>
        <p>
          {movieObject.year} | {movieObject.runtime}
        </p>
      </div>
    </div>
  );
};
