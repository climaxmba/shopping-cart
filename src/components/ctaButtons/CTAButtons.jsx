/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiHeart, mdiHeartOutline, mdiMinus, mdiPlus } from "@mdi/js";
import styles from "./ctaButtons.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  like,
  unLike,
} from "../../_redux/store";

export default function CTAButtons({ id, title, price, image }) {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.likes.value).includes(id);

  const handleLike = (e) => {
    dispatch(liked ? unLike(id) : like(id));
    e.stopPropagation();
  };

  return (
    <div className={styles.ctaContainer}>
      <AddToCart id={id} title={title} price={price} image={image} />
      <span
        title={liked ? "Unlike" : "Like"}
        className={styles.likeContainer}
        onClick={handleLike}
      >
        <Icon
          path={liked ? mdiHeart : mdiHeartOutline}
          size={1.2}
          color="#e91e63"
        />
      </span>
    </div>
  );
}

export function AddToCart({ id, title, price, image }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [item] = cart.filter((cartItem) => cartItem.id === id);

  const handleAddToCart = (e) => {
    dispatch(addItem({ id, title, price, quantity: 1, image }));
    e.stopPropagation();
  };

  const handleIncrement = (e) => {
    dispatch(incrementItemQuantity(id));
    e.stopPropagation();
  };

  const handleDecrement = (e) => {
    dispatch(decrementItemQuantity(id));
    e.stopPropagation();
  };

  return (
    <>
      {item ? (
        <div className={styles.cartQuantityContainer}>
          <button title="Decrease Quantity" onClick={handleDecrement} tabIndex={0}>
            <Icon size={1} path={mdiMinus} color="white" />
          </button>
          <span title="Item Quantity" className={styles.quantityText}>
            {item.quantity}
          </span>
          <button title="Increase Quantity" onClick={handleIncrement} tabIndex={0}>
            <Icon size={1} path={mdiPlus} color="white" />
          </button>
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
