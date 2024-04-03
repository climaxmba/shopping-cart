import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";
import styles from "./ctaButton.module.scss";

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
