import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ShopItemHorizontal } from "../../components/shopItem/ShopItem";

import PropTypes from "prop-types";
import styles from "./cart.module.scss";

export default function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Cart</h2>
      {cart.length ? (
        <>
          <CartList cart={cart} />
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

function CartList({ cart }) {
  return (
    <div className={styles.cartList}>
      {cart.map((product) => (
        <ShopItemHorizontal
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rate={product.rate}
        />
      ))}
    </div>
  );
}

CartList.propTypes = {
  cart: PropTypes.array,
};
