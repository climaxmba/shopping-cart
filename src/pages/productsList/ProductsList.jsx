/* eslint-disable react/prop-types */
import { Outlet, useParams } from "react-router-dom";
import styles from "./productsList.module.scss";

export default function ProductsList({ children }) {
  const { productId } = useParams();
  return (
    <div className={styles.container}>
      <div className={productId ? styles.collapsableProductsList : styles.productsList}>{children}</div>
      {productId && (
        <div className={styles.productDetails}>
          <Outlet />
        </div>
      )}
    </div>
  );
}
