import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { PageNotFoundPage } from "./pages/PageNotFoundPage/PageNotFoundPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { movies } from "./data/movies";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const defaultFavorites = movies
    .filter((movie) => movie.isFavorite)
    .map((movie) => movie.id);
  const [favorites, setFavorites] = useLocalStorage(
    "favorites",
    defaultFavorites,
  );

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path={routes[0].route} element={<Home />} />
        <Route path={routes[1].route} element={<MoviePage favorites={favorites}/>} />
        <Route
          path={routes[2].route}
          element={
            <FavoritesPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path={routes[3].route}
          element={
            <MovieDetailsPage
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route path={routes[4].route} element={<PageNotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
