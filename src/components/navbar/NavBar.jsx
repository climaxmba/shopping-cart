import Icon from "@mdi/react";
import { mdiCart, mdiCartOutline, mdiMenu, mdiStore } from "@mdi/js";
import { Link, NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Icon className={styles.menuIcon} size={1} path={mdiMenu} />
      <Link to="/">
        <Icon path={mdiStore} /> Logo
      </Link>
      <NavLink to="/cart">
        {({ isActive }) => (
          <>
            <Icon path={isActive ? mdiCart : mdiCartOutline} /> Cart
          </>
        )}
      </NavLink>
    </nav>
  );
}
