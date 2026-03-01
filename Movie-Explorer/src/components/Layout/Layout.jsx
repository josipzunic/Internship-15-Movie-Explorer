import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1 className={styles.title}>MOVIE EXPLORER</h1>
        <nav>
          <div>
            <img
              src="../../../public/assets/video-camera.png"
              alt="Video camera"
              className={styles.image}
            />
          </div>
          {routes.map((route) => {
            return route.route === routes[3].route ||
              route.route === routes[4].route ? null : (
              <NavLink
                key={route.id}
                to={route.route}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.linkActive : styles.linkInactive}`
                }
              >
                {route.name}
              </NavLink>
            );
          })}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
