/* eslint-disable react/prop-types */
import { Outlet, useParams } from "react-router-dom";
import styles from "./productsList.module.css";

export default function ProductsList({ children }) {
  const { productId } = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.productsList}>{children}</div>
      {productId && (
        <div className={styles.productDetails}>
          <Outlet />
        </div>
      )}
    </div>
  );
}
