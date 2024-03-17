import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <span className={styles.menuIcon}>Menu</span>
      <span>Store Logo</span>
      <span>Cart</span>
    </nav>
  );
}
