/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./productsList.module.scss";
import ShopItem from "../shopItem/ShopItem";

/** Requires container style: `{container: products-sectn / inline-size;}` */
export default function ProductsList({ getProducts, hasProductId = false, }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const likes = useSelector((state) => state.likes.value);

  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
      setIsLoading(false);
    })();
  }, [getProducts]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
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
              liked={likes.includes(product.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}
