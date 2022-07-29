import { NavLink } from "react-router-dom";

import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/heroes"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Heroes
      </NavLink>
    </header>
  );
}
