/* eslint-disable react/prop-types */
import { Outlet, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import storeAPI from "../../modules/storeAPI";
// import ShopItem from "../../components/shopItem/ShopItem";
import styles from "./products.module.scss";
import ProductsList from "../../components/productsList/ProductsList";

export default function Products() {
  const { productId } = useParams();
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const likes = useSelector((state) => state.likes.value);

  // useEffect(() => {
  //   (async () => {
  //     setProducts(await storeAPI.getProducts());
  //     setIsLoading(false);
  //   })();
  // }, []);

  return (
    <div className={styles.container}>
      <ProductsList getProducts={storeAPI.getProducts} hasProductId={productId ? true : false} />

      {productId && (
        <div className={styles.productDetails}>
          <Outlet />
        </div>
      )}
    </div>
  );
}
