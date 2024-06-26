import { createSlice } from "@reduxjs/toolkit";
import {
  mdiCash,
  mdiStoreOutline,
  mdiTruckOutline,
  mdiWalletOutline,
} from "@mdi/js";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    billing: {
      options: [
        {
          title: "Use e-Wallet",
          info: "The amount would be deducted right away from your wallet.",
          selected: false,
          icon: mdiWalletOutline,
        },
        {
          title: "Pay with Cash",
          info: "You pay with cash, after delivery.",
          selected: false,
          icon: mdiCash,
        },
      ],
    },
    shipping: {
      address: "",
      options: [
        {
          title: "Express Delivery",
          info: "Your order would be delivered to your house, this attracts a delivery fee of $15.",
          selected: false,
          icon: mdiTruckOutline,
        },
        {
          title: "Pickup Location",
          info: "You visit a store close to you to recieve your order. No delivery fee required.",
          selected: false,
          icon: mdiStoreOutline,
        },
      ],
    },
  },
  reducers: {
    setBillingOptions: (state, action) => {
      state.billing.options = action.payload;
    },
    setShippingOptions: (state, action) => {
      state.shipping.options = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shipping.address = action.payload;
    },
  },
});

export default checkoutSlice;
