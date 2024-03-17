import styles from "./ctaButton.module.css";

// Props: { addToCart, incrementQuantity, decrementQuantity, like, unLike }
export default function CTAButtons() {
  return (
    <div className={styles.ctaContainer}>
      <AddToCart />
      <span>Like</span>
    </div>
  );
}

export function AddToCart() {
  return <button type="button" className={styles.addToCart}>Add to Cart</button>
}
