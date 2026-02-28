import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "HOME";
  }, []);

  return (
    <section>
      <h2>WELCOME</h2>
      <p>This is home page</p>
    </section>
  );
};
