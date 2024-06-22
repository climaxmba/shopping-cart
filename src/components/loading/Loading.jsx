import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.ringsContainer}>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
      </div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
}
