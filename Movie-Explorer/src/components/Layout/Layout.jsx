import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>MOVIE EXPLORER</h1>
        <nav>
          {routes.map((route) => {
            return route.route === routes[3].route ||
              route.route === routes[4].route ? null : (
              <NavLink
                key={route.id}
                to={route.route}
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.linkInactive
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
