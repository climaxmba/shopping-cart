import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductsList from "../productsList/ProductsList";
import ShopItem from "../../components/shopItem/ShopItem";
import storeAPI from "../../modules/storeAPI";

import styles from "./categories.module.scss";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setCategories(await storeAPI.getCategories());
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li key={category}>
              <Link to={category}>{category}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Categories() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setProducts(await storeAPI.getProductsByCategory(category));
      setIsLoading(false);
    })();
  }, [category]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Categories {category && `| ${category}`}
      </h2>
      {category ? (
        <>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ProductsList>
              {products.map((product) => (
                <ShopItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </ProductsList>
          )}
        </>
      ) : (
        <CategoryList />
      )}
    </div>
  );
}

export default Categories;
