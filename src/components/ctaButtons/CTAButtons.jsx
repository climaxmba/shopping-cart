/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiMinus, mdiPlus } from "@mdi/js";
import styles from "./ctaButton.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  // like,
  // unLike,
} from "../../_redux/store";

// function Test() {
//   const dispatch = useDispatch();
//   const userName = useSelector(state => state.user.value.userName)

//   return (
//     <div>
//       <p>{userName}</p>
//       <button onClick={() => dispatch(login({ userName: "value" }))}>
//         Click me
//       </button>
//     </div>
//   );
// }

// Props: { addToCart, incrementQuantity, decrementQuantity, like, unLike }
export default function CTAButtons() {
  return (
    <div className={styles.ctaContainer}>
      <AddToCart />
      <Icon path={mdiHeartOutline} />
    </div>
  );
}

export function AddToCart({ id, title, price }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [item] = cart.filter((cartItem) => cartItem.id === id);

  const handleAddToCart = () => {
    dispatch(addItem({ id, title, price, quantity: 1 }));
  };

  const handleIncrement = () => {
    dispatch(incrementItemQuantity(id));
  };

  const handleDecrement = () => {
    dispatch(decrementItemQuantity(id));
  };

  return (
    <>
      {item ? (
        <div className={styles.cartQuantityContainer}>
          <span title="Decrease Quantity" onClick={handleDecrement}>
            <Icon size={1} path={mdiMinus} color="white" />
          </span>
          <span title="Item Quantity" className={styles.quantityText}>{item.quantity}</span>
          <span title="Increase Quantity" onClick={handleIncrement}>
            <Icon size={1} path={mdiPlus} color="white" />
          </span>
        </div>
      ) : (
        <button
          type="button"
          title="Add to Cart"
          className={styles.addToCart}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}

export function HomeButton({ text }) {
  return (
    <button type="button" className={styles.homeButton}>
      {text}
    </button>
  );
}
