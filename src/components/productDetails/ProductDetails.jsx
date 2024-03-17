// import { useParams } from "react-router-dom";
import styles from "./productDetails.module.css";
import { ShopItemDetailed } from "../shopItem/ShopItem";

export default function ProductDetails() {
  // const { productId } = useParams();

  // getDetails

  return (
    <div className={styles.container}>
      <ShopItemDetailed />
      <Description />
      {/* <Reviews />
      <SimilarProducts /> */}
    </div>
  );
}

function Description() {
  return (
    <div className={styles.description}>
      <h2>Description</h2>
      <div>{"Lorem ipsum dolor sit amet"}</div>
    </div>
  );
}

// function Reviews() {
//   return (
//     <div>
//       {/* <div>
//         <h2>Reviews</h2>
//         <Button text="Add" />
//       </div> */}
//     </div>
//   );
// }

// function SimilarProducts() {
//   return <div></div>
// }
