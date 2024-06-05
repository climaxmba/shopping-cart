import { createSlice } from "@reduxjs/toolkit";
import storage from "../../modules/storage";

const initialState = { value: storage.getCart() };

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newCart = [...state.value, action.payload];
      state.value = newCart;
      storage.setCart(newCart);
    },
    getItem: (state, action) => {
      return state.value.filter((item) => item.id === action.payload);
    },
    incrementItemQuantity: (state, action) => {
      const newCart = state.value.map((item) => {
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });

      state.value = newCart;
      storage.setCart(newCart);
    },
    decrementItemQuantity: (state, action) => {
      const newCart = state.value.map((item) => {
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });

      state.value = newCart;
      storage.setCart(newCart);
    },
  },
});

export default cartSlice;
