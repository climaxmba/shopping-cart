import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  like,
  unLike,
} from "../../_redux/store";
import Icon from "@mdi/react";
import { mdiHeart, mdiHeartOutline, mdiMinus, mdiPlus } from "@mdi/js";

import PropTypes from "prop-types";
import styles from "./ctaButtons.module.scss";

export default function CTAButtons({ id, title, price, image, rate }) {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.likes.value).find(like => like.id === id);

  const handleLike = (e) => {
    dispatch(liked ? unLike(id) : like({id, title, price, image, rate}));
    e.stopPropagation();
  };

  return (
    <div className={styles.ctaContainer}>
      <AddToCart id={id} title={title} price={price} image={image} rate={rate} />
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

CTAButtons.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  rate: PropTypes.number,
};

export function AddToCart({ id, title, price, image, rate }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [item] = cart.filter((cartItem) => cartItem.id === id);

  const handleAddToCart = (e) => {
    dispatch(addItem({ id, title, price, quantity: 1, image, rate }));
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
          <button
            title="Decrease Quantity"
            onClick={handleDecrement}
            tabIndex={0}
          >
            <Icon size={1} path={mdiMinus} color="white" />
          </button>
          <span title="Item Quantity" className={styles.quantityText}>
            {item.quantity}
          </span>
          <button
            title="Increase Quantity"
            onClick={handleIncrement}
            tabIndex={0}
          >
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

AddToCart.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  rate: PropTypes.number,
};

export function HomeButton({ text, onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.homeButton}>
      {text}
    </button>
  );
}

HomeButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
