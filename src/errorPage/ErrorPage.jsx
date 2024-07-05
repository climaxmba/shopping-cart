/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import logoText from "../assets/logoText.svg"
import styles from "./errorPage.module.scss";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" height={28}/>
        <img src={logoText} alt="" height={25} />
      </div>
      <p className={styles.errorCode}>404</p>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        Visit Home page
      </Link>
    </div>
  );
}