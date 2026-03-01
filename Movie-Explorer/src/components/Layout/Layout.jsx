import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>HOME</h1>
        <nav>
          {routes.map((route) => {
            return (
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
