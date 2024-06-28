/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBillingOptions,
  setShippingAddress,
  setShippingOptions,
  resetCheckout,
  resetCart,
} from "../../_redux/store";
import { Button } from "@mui/material";
import Icon from "@mdi/react";

import ProductsTable from "../../components/productsTable/ProductTable";
import Stepper from "../../components/stepper/Stepper";

import styles from "./checkout.module.scss";
import ModalCheckout from "../../components/modalCheckout/ModalCheckout";

export default function Checkout() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [pages, setPages] = useState([
    {
      element: Billing,
      isActive: true,
      completed: false,
    },
    {
      element: Shipping,
      isActive: false,
      completed: false,
    },
    {
      element: Summary,
      isActive: false,
      completed: false,
    },
  ]);

  let ActivePage, activeIndex;

  pages.forEach((page, index) => {
    if (page.isActive) {
      ActivePage = page.element;
      activeIndex = index;
    }
  });

  const next = () => {
    // Set completed to `true`
    const tempPages = pages.map((page, i) => {
      if (activeIndex === i) return { ...page, completed: true };
      return page;
    });

    if (activeIndex + 1 !== pages.length) {
      setPages(
        tempPages.map((page, i) => {
          if (activeIndex + 1 === i) return { ...page, isActive: true };
          return { ...page, isActive: false };
        })
      );
    } else {
      setPages(tempPages);
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    dispatch(resetCheckout());
    dispatch(resetCart());
  };

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>
      <Stepper pages={pages} />
      <ActivePage next={next} />
      <ModalCheckout open={modalOpen} onClose={handleModalClose} />
    </div>
  );
}

function Billing({ next }) {
  const options = useSelector((state) => state.checkout.billing.options);
  const dispatch = useDispatch();

  const selectOption = (id) => {
    const tempOption = options.map((option, i) => {
      if (i === id) return { ...option, selected: true };
      else return { ...option, selected: false };
    });
    dispatch(setBillingOptions(tempOption));
  };

  const nextButtonDisabled = options.find((val) => val.selected) ? false : true;

  return (
    <div className={styles.billing}>
      <h3>Set Payment Method</h3>
      <div className={styles.radioFieldContainer}>
        {options.map((option, i) => (
          <div
            key={option.title}
            className={`${styles.radioField} ${
              option.selected ? styles.selected : ""
            }`}
            onClick={() => selectOption(i)}
          >
            <Icon path={option.icon} color={"black"} size={1} />
            <div className={styles.title}>{option.title}</div>
            <span className={styles.info}>{option.info}</span>
          </div>
        ))}
      </div>

      <Button
        variant="contained"
        className={styles.nextButton}
        sx={{ margin: "1rem 0" }}
        onClick={next}
        disabled={nextButtonDisabled}
      >
        Next
      </Button>
    </div>
  );
}

function Shipping({ next }) {
  const address = useSelector((state) => state.checkout.shipping.address);
  const options = useSelector((state) => state.checkout.shipping.options);
  const dispatch = useDispatch();

  const selectOption = (id) => {
    const tempOption = options.map((option, i) => {
      if (i === id) return { ...option, selected: true };
      else return { ...option, selected: false };
    });
    dispatch(setShippingOptions(tempOption));
  };

  const nextButtonDisabled =
    options.find((val) => val.selected) && address ? false : true;

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
          onInput={(e) => dispatch(setShippingAddress(e.target.value))}
        />
      </div>

      <div>
        <div className={styles.header}>Set Delivery Method</div>
        <div className={styles.radioFieldContainer}>
          {options.map((option, i) => (
            <div
              key={option.title}
              className={`${styles.radioField} ${
                option.selected ? styles.selected : ""
              }`}
              onClick={() => selectOption(i)}
            >
              <Icon path={option.icon} color={"black"} size={1} />
              <div className={styles.title}>{option.title}</div>
              <span className={styles.info}>{option.info}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="contained"
        className={styles.nextButton}
        onClick={next}
        disabled={nextButtonDisabled}
      >
        Next
      </Button>
    </div>
  );
}

function Summary({ next }) {
  const shippingAddress = useSelector(
    (state) => state.checkout.shipping.address
  );
  const shippingOptions = useSelector(
    (state) => state.checkout.shipping.options
  );
  const billingOptions = useSelector((state) => state.checkout.billing.options);
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

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const includeShipping =
    shippingOptions.find((val) => val.selected).title === "Express Delivery" &&
    cart.length;

  return (
    <div className={styles.summary}>
      <div>
        <h3>Summary</h3>
        <ProductsTable
          products={data}
          totalAmount={totalAmount}
          includeShipping={includeShipping}
        />
      </div>
      <div>
        <h3>Shipping Address</h3>
        <p>{shippingAddress}</p>
      </div>
      <div>
        <h3>Payment Method</h3>
        <p>{billingOptions.find((val) => val.selected).title}</p>
      </div>

      <Button variant="contained" className={styles.nextButton} onClick={next}>
        Checkout ($
        {includeShipping
          ? (parseFloat(totalAmount) + 15).toFixed(2)
          : totalAmount}
        )
      </Button>
    </div>
  );
}
