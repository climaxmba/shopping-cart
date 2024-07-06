import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ShopItem from "../shopItem/ShopItem";
import Loading, { LoadingError } from "../loading/Loading";

import PropTypes from "prop-types";
import styles from "./productsList.module.scss";

/** Requires container style: `{container: products-sectn / inline-size;}` */
export default function ProductsList({ getProducts, hasProductId = false }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const likes = useSelector((state) => state.likes.value);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setProducts(await getProducts());
      } catch {
        setHasError(true);
      }
      setIsLoading(false);
    })();
  }, [getProducts]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <LoadingError />
      ) : (
        <div
          className={
            hasProductId ? styles.collapsableProducts : styles.products
          }
        >
          {products.map((product) => (
            <ShopItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
              liked={likes.find(like => like.id === product.id) && true}
            />
          ))}
        </div>
      )}
    </>
  );
}

ProductsList.propTypes = {
  getProducts: PropTypes.func,
  hasProductId: PropTypes.bool,
};
