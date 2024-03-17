/* eslint-disable react/prop-types */
import CTAButtons, { AddToCart } from "../ctaButtons/CTAButtons";

import styles from "./shopItem.module.css";

export default function ShopItem() {
  return (
    <div className={styles.containerPortrait}>
      <div className={styles.imgContainer}>IMG</div>
      <div>
        <div className={styles.productName}>Product Name</div>
        <div className={styles.price}>Price</div>
        <AddToCart />
      </div>
    </div>
  );
}

export function ShopItemDetailed() {
  return (
    <div className={styles.containerDetailed}>
      <div className={styles.imgContainer}>IMG</div>
      <div>
        <div className={styles.productName}>Product Name</div>
        <div className={styles.price}>Price</div>
        <CTAButtons />
      </div>
    </div>
  )
}
