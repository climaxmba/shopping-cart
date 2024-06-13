/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import styles from "./productDetails.module.scss";
import { ShopItemDetailed } from "../shopItem/ShopItem";
import { useEffect, useState } from "react";
import storeAPI from "../../modules/storeAPI";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [productId]);

  useEffect(() => {
    (async () => {
      setProduct(await storeAPI.getProductById(productId));
      setIsLoading(false);
    })();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <ShopItemDetailed
            id={parseInt(productId)}
            image={product.image}
            title={product.title}
            price={product.price}
          />
          <Description description={product.description} />
          <Rating rating={product.rating.rate} count={product.rating.count} />
          {/* <SimilarProducts /> */}
        </div>
      )}
    </>
  );
}

function Description({ description }) {
  return (
    <div className={styles.description}>
      <h2>Description</h2>
      <div>{description}</div>
    </div>
  );
}

function Rating({ rating, count }) {
  return (
    <div className={styles.ratingContainer}>
      <h2>Rating</h2>
      <div className={styles.rating}>
        <span>{rating} / 5</span>
        <progress max={5} value={rating} />
        <span>({count})</span>
      </div>
    </div>
  );
}

// function SimilarProducts() {
//   return <div></div>
// }
