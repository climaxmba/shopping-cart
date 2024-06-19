// import { useSelector } from "react-redux";

// import ProductsTable from "../../components/productsTable/ProductTable";
import { useState } from "react";
import styles from "./checkout.module.scss";
import Icon from "@mdi/react";
import { mdiStoreOutline, mdiTruckOutline } from "@mdi/js";

export default function Checkout() {
  // const cart = useSelector((state) => state.cart.value);
  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const data = cart.map((item) => {
  //   return {
  //     id: item.id,
  //     title: item.title,
  //     price: item.price,
  //     quantity: item.quantity,
  //     image: item.image
  //   };
  // });

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>
      {/* <ProductsTable products={data} totalAmount={totalAmount} /> */}
      <Shipping />
    </div>
  );
}

function Shipping() {
  const [options, setOptions] = useState([
    {
      id: 0,
      title: "Express Delivery",
      info: "Your order would be delivered to your house, this attracts a delivery fee of $15.",
      selected: false,
      icon: mdiTruckOutline,
    },
    {
      id: 1,
      title: "Pickup Location",
      info: "You visit a store close to you to recieve your order. No delivery fee required.",
      selected: false,
      icon: mdiStoreOutline,
    },
  ]);

  const selectOption = (id) => {
    const tempOption = options.map((option) => {
      if (option.id === id) return { ...option, selected: true };
      else return { ...option, selected: false };
    });
    setOptions(tempOption);
  };

  return (
    <div className={styles.shipping}>
      <div>
        <label htmlFor="setAddress" className={styles.header}>
          Set Address
        </label>
        <input
          type="text"
          name="shippingAddress"
          id="setAddress"
          placeholder="Example: 127 York Street, CA."
          className={styles.addressInput}
        />
      </div>
      <div>
        <div className={styles.header}>Set Delivery Method</div>
        <div className={styles.radioFieldContainer}>
          {options.map((option) => (
            <div
              key={option.title}
              className={`${styles.radioField} ${
                option.selected ? styles.selected : ""
              }`}
              onClick={() => selectOption(option.id)}
            >
              <Icon path={option.icon} color={"black"} size={1} />
              <div className={styles.title}>{option.title}</div>
              <span className={styles.info}>{option.info}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
