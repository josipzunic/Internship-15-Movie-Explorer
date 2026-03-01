import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { MoviePage } from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes[0].route} element={<Home />} />
        <Route path={routes[1].route} element={<MoviePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
