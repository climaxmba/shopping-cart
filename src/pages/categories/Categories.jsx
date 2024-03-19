import { useParams } from "react-router-dom";
import ProductsList from "../productsList/ProductsList";
import ShopItem from "../../components/shopItem/ShopItem";

function CategoryList() {
  return (
    <ul>
      <li>Clothes</li>
      <li>Jewelries</li>
      <li>Items</li>
    </ul>
  );
}

function Categories() {
  const { category } = useParams();
  return (
    <div>
      <h2>Categories {category && `| ${category}`}</h2>
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
