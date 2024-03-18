import Icon from "@mdi/react";
import styles from "./ctaButton.module.css";
import { mdiHeartOutline } from "@mdi/js";

// Props: { addToCart, incrementQuantity, decrementQuantity, like, unLike }
export default function CTAButtons() {
  return (
    <div className={styles.ctaContainer}>
      <AddToCart />
      <Icon path={mdiHeartOutline} />
    </div>
  );
}

export function AddToCart() {
  return <button type="button" className={styles.addToCart}>Add to Cart</button>
}
