import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import storeAPI from "../../modules/storeAPI";

import styles from "./categories.module.scss";
import CategoryProducts from "./categoryProducts/CategoryProducts";

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

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Categories {category && `| ${category}`}
      </h2>
      {category ? <CategoryProducts category={category} /> : <CategoryList />}
    </div>
  );
}

export default Categories;
