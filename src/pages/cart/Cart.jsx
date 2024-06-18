/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
// import ProductsTable from "../../components/productsTable/ProductTable";
import styles from "./cart.module.scss";
import Button from "../../components/button/Button";
import { ShopItemHorizontal } from "../../components/shopItem/ShopItem";

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const data = cart.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image: item.image
    };
  });

  return (
    <div className={styles.container}>
      <h2>Cart</h2>
      <CartList products={data} />
      {/* <ProductsTable products={data} totalAmount={totalAmount} /> */}
      <Button
        text={"Proceed to Checkout"}
        style={{ margin: "1.5rem 0" }}
        onClick={() => alert("Checked out!")}
        fill
      />
    </div>
  );
}

function CartList({ products }) {
  return (
    <div className={styles.cartList}>
      {products.map((product) => (
        <ShopItemHorizontal
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Cart;