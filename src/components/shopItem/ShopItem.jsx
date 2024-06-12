/* eslint-disable react/prop-types */
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import Icon from "@mdi/react";
import CTAButtons, { AddToCart } from "../ctaButtons/CTAButtons";
import styles from "./shopItem.module.scss";

import { useDispatch } from "react-redux";
import { like, unLike } from "../../_redux/store";
import { useParams, useNavigate } from "react-router-dom";

const currency = "$";

export default function ShopItem({ id, title, price, image, liked = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleLike = (e) => {
    dispatch(liked ? unLike(id) : like(id));
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.containerPortrait} ${
        parseInt(productId) === id ? styles.isSelected : ""
      }`}
      onClick={() => navigate(id.toString())}
    >
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

export function ShopItemDetailed({ id, image, title, price }) {
  return (
    <div className={styles.containerDetailed}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div>
        <div className={styles.productName}>{title}</div>
        <div className={styles.price}>{`${currency}${price}`}</div>
        <CTAButtons id={id} title={title} price={price} />
      </div>
    </div>
  );
}
