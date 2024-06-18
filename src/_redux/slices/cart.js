import { createSlice } from "@reduxjs/toolkit";
import storage from "../../modules/storage";

const initialState = {
  value: storage.getCart(),
  totalAmount: storage.getCartTotal(),
};

const calcTotal = (cart) => {
  return cart
    .reduce(
      (total, product) =>
        total + parseFloat(product.price) * parseFloat(product.quantity),
      0
    )
    .toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newCart = [...state.value, action.payload];

      state.value = newCart;
      state.totalAmount = calcTotal(newCart);
      storage.setCart(newCart);
    },
    incrementItemQuantity: (state, action) => {
      const newCart = state.value.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      state.value = newCart;
      state.totalAmount = calcTotal(newCart);
      storage.setCart(newCart);
    },
    decrementItemQuantity: (state, action) => {
      const oldCart = state.value;
      const [product] = oldCart.filter(
        (cartItem) => cartItem.id === action.payload
      );

      const newCart =
        product && product.quantity === 1
          ? oldCart.filter((item) => item.id != product.id)
          : oldCart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );

      state.value = newCart;
      state.totalAmount = calcTotal(newCart);
      storage.setCart(newCart);
    },
  },
});

export default cartSlice;
