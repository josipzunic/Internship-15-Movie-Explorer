import { pageNames } from "../../constants/pageNames";
import { movies } from "../../data/movies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useEffect, useRef } from "react";
import styles from "./MoviePage.module.css";

export const MoviePage = () => {
  const searchRef = useRef(null);

  useEffect(() => {
    document.title = pageNames.movies;
  }, []);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className={styles.moviePage}>
      <div>
        <input
          ref={searchRef}
          type="search"
          className={styles.input}
          placeholder="Search movies..."
        />
      </div>
      <div className={styles.movieContainer}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movieObject={movie}></MovieCard>;
        })}
      </div>
    </div>
  );
};
