import { createSlice } from "@reduxjs/toolkit";
import storage from "../../modules/storage";

const initialState = {
  value: storage.getUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const newUser = action.payload;
      state.value = newUser;
      storage.setUser(newUser);
    },
    logout: (state) => {
      state.value = initialState.value;
      storage.setUser({
        userName: "",
        email: "",
        phone: "",
        address: "",
      });
    },
  },
});

export default userSlice;
