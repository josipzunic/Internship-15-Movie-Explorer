import { pageNames } from "../../constants/pageNames";
import { movies as moviesData } from "../../data/movies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./MoviePage.module.css";
import { Loader } from "../../components/Loader/Loader";

export const MoviePage = () => {
  const searchRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    document.title = pageNames.movies;
  }, []);

  useEffect(() => {
    if (isLoaded && searchRef.current) searchRef.current.focus();
  }, [isLoaded]);

  useEffect(() => {
    setTimeout(() => {
      setMovies(moviesData);
      setIsLoaded(true);
    }, 1000);
  }, []);

  const displayedMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [movies, searchText]);

  const handleSearch = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
  };

  return (
    <>
      {!isLoaded ? <Loader></Loader> : null}
      {isLoaded ? (
        <div className={styles.moviePage}>
          <div className={styles.inputs}>
            <input
              ref={searchRef}
              type="search"
              className={styles.input}
              placeholder="Search movies..."
              onChange={(e) => handleSearch(e)}
            />
            <select name="sorting" id="">
              <option value="">A-&gt;Z</option>
              <option value="">Z-&gt;A</option>
              <option value="">Rating</option>
              <option value="">Year</option>
            </select>
          </div>
          <div className={styles.movieContainer}>
            {displayedMovies.map((movie) => {
              return <MovieCard key={movie.id} movieObject={movie}></MovieCard>;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};
