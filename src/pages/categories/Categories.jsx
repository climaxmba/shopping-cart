import { Link, useParams } from "react-router-dom";
import ProductsList from "../productsList/ProductsList";
import ShopItem from "../../components/shopItem/ShopItem";

import styles from "./categories.module.css";

function CategoryList() {
  return (
    <ul className={styles.categoryList}>
      <li><Link to="category">Clothes</Link></li>
      <li><Link to="category">Jewelries</Link></li>
      <li><Link to="category">Items</Link></li>
    </ul>
  );
}

function Categories() {
  const { category } = useParams();
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Categories {category && `| ${category}`}</h2>
      {category ? (
        <ProductsList>
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </ProductsList>
      ) : (
        <CategoryList />
      )}
    </div>
  );
}

export default Categories;
