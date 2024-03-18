/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiCart, mdiCartOutline, mdiMenu, mdiStore } from "@mdi/js";
import { Link, NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

export default function NavBar({ setMenuOpen }) {
  const handleMenuClick = () => setMenuOpen((val) => !val);
  return (
    <nav className={styles.navBar}>
      <span title="Menu" onClick={handleMenuClick}>
        <Icon className={styles.menuIcon} path={mdiMenu} />
      </span>
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
