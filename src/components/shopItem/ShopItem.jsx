/* eslint-disable react/prop-types */
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import Icon from "@mdi/react";
import CTAButtons, { AddToCart } from "../ctaButtons/CTAButtons";
import styles from "./shopItem.module.scss";

import { useDispatch } from "react-redux";
import { like, unLike } from "../../_redux/store";

const currency = "$";

export default function ShopItem({ id, title, price, image, liked = false }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.containerPortrait}>
      <span
        className={styles.likeContainer}
        onClick={() => dispatch(liked ? unLike(id) : like(id))}
      >
        <Icon
          path={liked ? mdiHeart : mdiHeartOutline}
          size={1.2}
          color="#e91e63"
        />
      </span>
      <div className={styles.imgContainer}>
        <img src={image} />
      </div>
      <div>
        <div className={styles.productTitle} title={title}>
          {title}
        </div>
        <div className={styles.price}>{`${currency}${price}`}</div>
        <AddToCart id={id} title={title} price={price} />
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
  );
}
