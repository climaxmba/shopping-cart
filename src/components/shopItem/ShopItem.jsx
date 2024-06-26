/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { like, unLike } from "../../_redux/store";
import { NavLink } from "react-router-dom";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Rating } from "@mui/material";

import CTAButtons from "../ctaButtons/CTAButtons";
import styles from "./shopItem.module.scss";

const currency = "$";

export default function ShopItem({
  id,
  title,
  price,
  image,
  rating,
  liked = false,
}) {
  const dispatch = useDispatch();

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(liked ? unLike(id) : like(id));
  };

  return (
    <NavLink
      to={id.toString()}
      className={({ isActive }) =>
        `${styles.containerPortrait} ${isActive ? styles.isSelected : ""}`
      }
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
        <img src={image} alt="" />
      </div>
      <div>
        <div className={styles.productTitle} title={title}>
          {title}
        </div>
        <div className={styles.price}>{`${currency}${price}`}</div>
        <Rating value={rating.rate} precision={0.1} readOnly />
      </div>
    </NavLink>
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
        <CTAButtons id={id} title={title} price={price} image={image} />
      </div>
    </div>
  );
}

export function ShopItemHorizontal({ id, image, title, price }) {
  return (
    <div className={styles.containerHorizontal}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div>
        <div title={title} className={styles.productName}>
          {title}
        </div>
        <div className={styles.price}>{`${currency}${price}`}</div>
        <CTAButtons id={id} title={title} price={price} image={image} />
      </div>
    </div>
  );
}
