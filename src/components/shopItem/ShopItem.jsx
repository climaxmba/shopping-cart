/* eslint-disable react/prop-types */
import CTAButtons from "../ctaButtons/CTAButtons";

import styles from "./shopItem.module.css";

export default function ShopItem({ states, landscape = false }) {
  return (
    <div className={landscape ? styles.containerLandscape : styles.containerPortrait}>
      <div className={styles.imgContainer}>IMG</div>
      <div>
        <div className={styles.productName}>Product Name</div>
        <CTAButtons />
      </div>
    </div>
  );
}
