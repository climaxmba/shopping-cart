import { Outlet, useParams } from "react-router-dom";

import storeAPI from "../../modules/storeAPI";
import styles from "./products.module.scss";
import ProductsList from "../../components/productsList/ProductsList";

export default function Products() {
  const { productId } = useParams();

  return (
    <div className={styles.container}>
      <ProductsList
        getProducts={storeAPI.getProducts}
        hasProductId={productId ? true : false}
      />

      {productId && (
        <div className={styles.productDetails}>
          <Outlet />
        </div>
      )}
    </div>
  );
}
