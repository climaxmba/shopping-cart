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
      });
    },
    setUserName: (state, action) => {
      state.value.userName = action.payload;
      storage.setUser({ ...state.value, userName: action.payload });
    },
    setEmail: (state, action) => {
      state.value.email = action.payload;
      storage.setUser({ ...state.value, email: action.payload });
    },
    setPhone: (state, action) => {
      state.value.phone = action.payload;
      storage.setUser({ ...state.value, phone: action.payload });
    },
  },
});

export default userSlice;
