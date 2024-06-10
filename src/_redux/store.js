import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user";
import cartSlice from "./slices/cart";
import likesSlice from "./slices/likes";

export const { login, logout } = userSlice.actions;
export const { addItem, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;
export const { like, unLike } = likesSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    likes: likesSlice.reducer,
  },
});
