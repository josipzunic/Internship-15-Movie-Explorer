import { useEffect } from "react";
import { pageNames } from "../constants/pageNames";

export const Home = () => {
  useEffect(() => {
    document.title = pageNames.home;
  }, []);

  return (
    <section>
      <h2>WELCOME</h2>
      <p>This is home page</p>
    </section>
  );
};
