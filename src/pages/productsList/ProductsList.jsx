/* eslint-disable react/prop-types */
import { Outlet, useParams } from "react-router-dom";
import styles from "./productsList.module.scss";

import storeAPI from "../../modules/storeAPI";
import { useEffect, useState } from "react";
import ShopItem from "../../components/shopItem/ShopItem";

export default function ProductsList() {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setProducts(await storeAPI.getProducts());
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div
          className={
            productId ? styles.collapsableProductsList : styles.productsList
          }
        >
          {products.map((product) => (
            <ShopItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}

      {productId && (
        <div className={styles.productDetails}>
          <Outlet />
        </div>
      )}
    </div>
  );
}
