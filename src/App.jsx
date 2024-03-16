import ProductsList from "./components/productsList/ProductsList";
import ShopItem from "./components/shopItem/ShopItem";

const App = () => {
  return (
    <div>
      <ProductsList>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </ProductsList>
    </div>
  );
};

export default App;
