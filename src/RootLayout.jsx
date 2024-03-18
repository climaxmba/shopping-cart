/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAccountOutline,
  mdiHome,
  mdiHomeOutline,
  mdiShape,
  mdiShapeOutline,
} from "@mdi/js";

function Menu() {
  return (
    <>
      <NavLink className="navlink" to="/">
        {({ isActive }) => (
          <>
            <Icon path={isActive ? mdiHome : mdiHomeOutline} /> Home
          </>
        )}
      </NavLink>
      <NavLink className="navlink" to="/categories">
        {({ isActive }) => (
          <>
            <Icon path={isActive ? mdiShape : mdiShapeOutline} /> Categories
          </>
        )}
      </NavLink>
      <NavLink className="navlink" to="/account">
        {({ isActive }) => (
          <>
            <Icon path={isActive ? mdiAccount : mdiAccountOutline} /> Account
          </>
        )}
      </NavLink>
    </>
  );
}

export default function RootLayout({ children, menuStates }) {
  return (
    <>
      <NavBar setMenuOpen={menuStates.setMenuOpen} />
      <main>
        {menuStates.menuOpen && (
          <section id="menu-sectn">
            <Menu />
          </section>
        )}
        <section id="outlet-sectn">{children}</section>
      </main>
      {/* footer */}
    </>
  );
}
