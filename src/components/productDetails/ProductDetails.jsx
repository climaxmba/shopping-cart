/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopItemDetailed } from "../shopItem/ShopItem";
import { Rating as MUIRating } from "@mui/material";
import storeAPI from "../../modules/storeAPI";
import styles from "./productDetails.module.scss";
import Loading, { LoadingError } from "../loading/Loading";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [productId]);

  useEffect(() => {
    (async () => {
      try {
        setProduct(await storeAPI.getProductById(productId));
      } catch {
        setHasError(true);
      }
      setIsLoading(false);
    })();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <LoadingError />
      ) : (
        <div className={styles.container}>
          <ShopItemDetailed
            id={parseInt(productId)}
            image={product.image}
            title={product.title}
            price={product.price}
            rate={product.rating.rate}
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
        <MUIRating max={5} value={rating} precision={0.1} readOnly />
        <span>({count})</span>
      </div>
    </div>
  );
}

// function SimilarProducts() {
//   return <div></div>
// }
