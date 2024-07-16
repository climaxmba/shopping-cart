/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAccountCheck,
  mdiAccountCheckOutline,
  mdiAccountOutline,
  mdiHeart,
  mdiHeartOutline,
  mdiHome,
  mdiHomeOutline,
  mdiShape,
  mdiShapeOutline,
} from "@mdi/js";
import { Badge, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

function Menu({ isOpen = false }) {
  const userName = useSelector((state) => state.user.value.userName);
  const likesLength = useSelector((state) => state.likes.value.length);
  const matches = useMediaQuery("(max-width:680px)");
  const tabIndex = isOpen ? 0 : -1;

  return (
    <div id="navlink-container">
      <NavLink className="navlink" to="/" tabIndex={tabIndex}>
        {({ isActive }) => (
          <>
            <Icon path={isActive ? mdiHome : mdiHomeOutline} /> Home
          </>
        )}
      </NavLink>
      <NavLink className="navlink" to="/categories" tabIndex={tabIndex}>
        {({ isActive }) => (
          <>
            <Icon path={isActive ? mdiShape : mdiShapeOutline} /> Categories
          </>
        )}
      </NavLink>
      <NavLink to="/likes" tabIndex={tabIndex}>
        {({ isActive }) => (
          <Badge
            className="navlink"
            badgeContent={likesLength || null}
            sx={{
              ".MuiBadge-badge": {
                bgcolor: "#303030",
                color: "white",
                position: `${matches ? "absolute" : "unset"}`,
              },
            }}
          >
            <Icon path={isActive ? mdiHeart : mdiHeartOutline} /> Likes
          </Badge>
        )}
      </NavLink>
      <NavLink className="navlink" to="/account" tabIndex={tabIndex}>
        {({ isActive }) => (
          <>
            <Icon
              path={
                isActive
                  ? userName
                    ? mdiAccountCheck
                    : mdiAccount
                  : userName
                  ? mdiAccountCheckOutline
                  : mdiAccountOutline
              }
            />
            Account
          </>
        )}
      </NavLink>
    </div>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
};

export default function RootLayout({ children, menuStates }) {
  return (
    <>
      <NavBar
        setMenuOpen={menuStates.setMenuOpen}
        menuOpen={menuStates.menuOpen}
      />
      <main>
        {menuStates.menuOpen && (
          <section id="menu-sectn">
            <Menu isOpen={menuStates.menuOpen} />
          </section>
        )}
        <section id="outlet-sectn">{children}</section>
      </main>
    </>
  );
}
