import { NavLink } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>
        <section id="menu-sectn">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/account">Account</NavLink>
        </section>
        <section id="outlet-sectn">{children}</section>
      </main>
      {/* footer */}
    </>
  );
}

RootLayout.propTypes = {
  children: function() {},
};
