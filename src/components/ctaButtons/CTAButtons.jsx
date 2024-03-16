import Button from "../button/Button";
import styles from "./ctaButton.module.css";

// Props: { addToCart, incrementQuantity, decrementQuantity, like, unLike }
export default function CTAButtons() {
  return (
    <div className={styles.ctaContainer}>
      <Button text="Add to Cart" />
      <span>Like</span>
    </div>
  );
}
