import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import storeAPI from "../../modules/storeAPI";

import styles from "./categories.module.scss";
import CategoryProducts from "./categoryProducts/CategoryProducts";
import Loading, { LoadingError } from "../../components/loading/Loading";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setCategories(await storeAPI.getCategories());
      } catch {
        setHasError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <LoadingError />
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
