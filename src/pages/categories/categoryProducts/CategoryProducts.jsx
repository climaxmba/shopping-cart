/* eslint-disable react/prop-types */
import { Outlet, useParams } from "react-router-dom";

import storeAPI from "../../../modules/storeAPI";
import styles from "./categoryProducts.module.scss";
import ProductsList from "../../../components/productsList/ProductsList";

export default function CategoryProducts({ category }) {
  const { productId } = useParams();

  return (
    <div className={styles.container}>
      <ProductsList getProducts={() => storeAPI.getProductsByCategory(category)} hasProductId={productId ? true : false} />

      {productId && (
        <div className={styles.productDetails}>
          <Outlet />
        </div>
      )}
    </div>
  );
}
