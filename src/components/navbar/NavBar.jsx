/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiCart, mdiCartOutline } from "@mdi/js";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import logoText from "../../assets/logoText.svg";
import styles from "./navbar.module.scss";

export default function NavBar({ setMenuOpen, menuOpen }) {
  const handleMenuClick = () => setMenuOpen((val) => !val);
  return (
    <nav className={styles.navBar}>
      <span
        title="Menu"
        className={`${styles.menu} ${menuOpen && styles.menuOpen}`}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
      <Link to="/">
        <span className={styles.logo}>
          <img src={logo} alt="Shopping Cart Logo" height={35} />
          <img src={logoText} height={28} alt="" />
        </span>
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
