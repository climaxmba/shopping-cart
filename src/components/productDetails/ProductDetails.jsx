import { useParams } from "react-router-dom";
import styles from "./productDetails.module.scss";
import { ShopItemDetailed } from "../shopItem/ShopItem";
import { useEffect, useState } from "react";
import storeAPI from "../../modules/storeAPI";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [productId])

  useEffect(() => {
    (async () => {
      setProduct(await storeAPI.getProductById(productId));
      setIsLoading(false);
    })();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <ShopItemDetailed id={parseInt(productId)} image={product.image} title={product.title} price={product.price} />
          <Description />
          {/* <Reviews />
      <SimilarProducts /> */}
        </div>
      )}
    </>
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
