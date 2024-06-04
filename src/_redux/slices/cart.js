import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { cart: [] } };

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // const cart = state.value.cart;
      const item = action.payload;

      // if !(item in cart)
      state.value.cart.push(item);
    },
    getItem: (state, action) => {
      return state.value.cart.filter((item) => item.id === action.payload);
    },
    incrementItemQuantity: (state, action) => {
      const cart = state.value.cart;
      state.value.cart = cart.map((item) => {
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item;
      });
    },
    decrementItemQuantity: (state, action) => {
      const cart = state.value.cart;
      state.value.cart = cart.map((item) => {
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item;
      });
    },
  },
});

export default cartSlice;
