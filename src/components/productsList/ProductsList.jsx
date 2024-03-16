/* eslint-disable react/prop-types */
import styles from "./productsList.module.css";

export default function ProductsList({ children }) {
  return <div className={styles.container}>{children}</div>;
}
