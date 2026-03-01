import { useEffect } from "react";
import { pageNames } from "../../constants/pageNames";
import styles from "./homePage.module.css";

export const HomePage = () => {
  useEffect(() => {
    document.title = pageNames.home;
  }, []);

  return (
    <section className={styles.screen}>
      <h2 className={styles.title}>
        Welcome to the Movie Explorer App &trade;
      </h2>
      <p className={styles.paragraph}>
        Main purpose of this application is to farmiliarize myself with React
        hooks and the process of building web applications in React
      </p>
      <div className={styles.credits}>
        <div className={styles.credit}>
          <p>CAST: </p>
          <p>STUDIO: </p>
          <p>DIRECTOR: </p>
          <p>MAKEUP: </p>
          <p>SCREENPLAY:</p>
        </div>
        <div className={styles.credit}>
          <p>JOSIP ZUNIC</p>
          <p>DUMP INTERNSHIP</p>
          <p>REACT JS</p>
          <p>CSS MODULES</p>
          <p>HTML</p>
        </div>
      </div>
    </section>
  );
};
