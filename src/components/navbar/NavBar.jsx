/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiCart, mdiCartOutline, mdiStore } from "@mdi/js";
import { Link, NavLink } from "react-router-dom";

import styles from "./navbar.module.scss";

export default function NavBar({ setMenuOpen }) {
  const handleMenuClick = () => setMenuOpen((val) => !val);
  return (
    <nav className={styles.navBar}>
      <span title="Menu" className={styles.menu} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
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
