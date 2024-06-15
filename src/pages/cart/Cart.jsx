import { useSelector } from "react-redux";
import ProductsTable from "../../components/productsTable/ProductTable";
import styles from "./cart.module.scss";
import Button from "../../components/button/Button";

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const data = cart.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    };
  });
  const totalAmount = data.reduce(
    (total, product) =>
      total + parseFloat(product.price) * parseFloat(product.quantity),
    0
  );

  return (
    <div className={styles.container}>
      <h2>Cart</h2>
      <ProductsTable products={data} totalAmount={totalAmount} />
      <Button text={`Checkout ($${totalAmount})`} style={{margin: "1.5rem 0"}} onClick={() => alert("Checked out!")} fill />
    </div>
  );
}

export default Cart;
