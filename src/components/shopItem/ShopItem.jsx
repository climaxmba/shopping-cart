import { useDispatch } from "react-redux";
import { like, unLike } from "../../_redux/store";
import { NavLink } from "react-router-dom";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Rating } from "@mui/material";
import PropTypes from "prop-types";

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
    dispatch(liked ? unLike(id) : like({id, title, price, image, rate: rating.rate}));
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

ShopItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  liked: PropTypes.bool,
};

export function ShopItemDetailed({ id, image, title, price, rate }) {
  return (
    <div className={styles.containerDetailed}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div>
        <div className={styles.productName}>{title}</div>
        <div className={styles.price}>{`${currency}${price}`}</div>
        <CTAButtons id={id} title={title} price={price} image={image} rate={rate} />
      </div>
    </div>
  );
}

ShopItemDetailed.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  rate: PropTypes.number,
};

export function ShopItemHorizontal({ id, image, title, price, rate }) {
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
        <CTAButtons id={id} title={title} price={price} image={image} rate={rate} />
      </div>
    </div>
  );
}

ShopItemHorizontal.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  rate: PropTypes.number,
};
