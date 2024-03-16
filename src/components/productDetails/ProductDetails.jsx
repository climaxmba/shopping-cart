import { useParams } from "react-router-dom";
import styles from "./productDetails.module.css";
import ShopItem from "../shopItem/ShopItem";
import Button from "../button/Button";

export default function ProductDetails() {
  const { productId } = useParams();

  // getDetails

  return (
    <div>
      <ShopItem />
      <Description />
      {/* <Reviews />
      <SimilarProducts /> */}
    </div>
  );
}

function Description() {
  return (
    <div>
      <h2>Description</h2>
      <div>{"Lorem ipsum dolor sit amet"}</div>
    </div>
  );
}

function Reviews() {
  return (
    <div>
      {/* <div>
        <h2>Reviews</h2>
        <Button text="Add" />
      </div> */}
    </div>
  );
}

function SimilarProducts() {
  return <div></div>
}
