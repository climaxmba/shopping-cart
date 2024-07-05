import { Outlet, useParams } from "react-router-dom";
import ProductsList from "../../../components/productsList/ProductsList";
import storeAPI from "../../../modules/storeAPI";
import PropTypes from "prop-types";
import styles from "./categoryProducts.module.scss";

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

CategoryProducts.propTypes = {
  category: PropTypes.string,
};
