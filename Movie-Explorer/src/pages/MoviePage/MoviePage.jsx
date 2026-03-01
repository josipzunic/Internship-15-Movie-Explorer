import { pageNames } from "../../constants/pageNames";
import { movies as moviesData } from "../../data/movies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./MoviePage.module.css";
import { Loader } from "../../components/Loader/Loader";
import {
  sortAlphabeticallyAsc,
  sortAlphabeticallyDesc,
  sortByYear,
} from "./sortHelper/sortHelpers";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

export const MoviePage = ({ favorites }) => {
  const searchRef = useRef(null);
  const debounceRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("az");

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
    const filteredMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    let movieArrayToReturn = [...filteredMovies];

    switch (sortOption) {
      case "az":
        movieArrayToReturn = sortAlphabeticallyAsc(movieArrayToReturn);
        break;
      case "za":
        movieArrayToReturn = sortAlphabeticallyDesc(movieArrayToReturn);
        break;
      case "year":
        movieArrayToReturn = sortByYear(movieArrayToReturn);
        break;
    }

    return movieArrayToReturn;
  }, [movies, searchText, sortOption]);

  const handleSearch = (e) => {
    const newSearchText = e.target.value;

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearchText(newSearchText);
    }, 300);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
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
            <select
              className={styles.select}
              name="sorting"
              onChange={(e) => handleSort(e)}
            >
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
              <option value="year">Year</option>
            </select>
          </div>
          <div className={styles.movieContainer}>
            {displayedMovies.length === 0 ? (
              <p className={styles.emptyMessage}>
                No movies found for this query.
              </p>
            ) : (
              displayedMovies.map((movie) => (
                <Link
                  key={movie.id}
                  className={styles.link}
                  to={routes[3].route.replace(":id", movie.id)}
                >
                  <MovieCard
                    movieObject={movie}
                    isFavorite={favorites.includes(movie.id)}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};
