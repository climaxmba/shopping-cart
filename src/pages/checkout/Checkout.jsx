import { useSelector } from "react-redux";

import ProductsTable from "../../components/productsTable/ProductTable";
import styles from "./checkout.module.scss";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.value);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
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
      <h2>Checkout</h2>
      <ProductsTable products={data} totalAmount={totalAmount} />
    </div>
  );
}
