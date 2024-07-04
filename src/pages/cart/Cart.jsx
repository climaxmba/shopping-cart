/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./cart.module.scss";
import { Button } from "@mui/material";
import { ShopItemHorizontal } from "../../components/shopItem/ShopItem";

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const data = cart.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    };
  });
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Cart</h2>
      {cart.length ? (
        <>
          <CartList products={data} />
          <Button
            variant="contained"
            sx={{
              margin: "1.5rem 0",
              textTransform: "none",
              ":focus": { outline: "none" },
            }}
            onClick={() => navigate("/checkout")}
            className={styles.button}
          >
            Proceed to Checkout
          </Button>
        </>
      ) : (
        <>
          <p>Your Cart is empty! </p>
          <Button
            variant="contained"
            sx={{
              margin: "1.5rem 0",
              textTransform: "none",
              ":focus": { outline: "none" },
            }}
            onClick={() => navigate("/products")}
            className={styles.button}
          >
            Start Shopping
          </Button>
        </>
      )}
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
