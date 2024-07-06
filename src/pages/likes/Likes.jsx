import { useSelector } from "react-redux";
import styles from "./likes.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ShopItemHorizontal } from "../../components/shopItem/ShopItem";
import PropTypes from "prop-types";

export default function Likes() {
  const likes = useSelector((state) => state.likes.value);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>My favourite products</h2>
      {likes.length ? (
        <>
          <LikesList likes={likes} />
        </>
      ) : (
        <>
          <p>Noting here yet!</p>
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
            Find Products
          </Button>
        </>
      )}
    </div>
  );
}

function LikesList({ likes }) {
  return (
    <div className={styles.cartList}>
      {likes.map((product) => (
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

LikesList.propTypes = {
  likes: PropTypes.array,
};
