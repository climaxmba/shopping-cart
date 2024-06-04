import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: { value: { likes: [] } },
  reducers: {
    like: (state, action) => {
      state.value.likes.push(action.payload);
    },
    unLike: (state, action) => {
      state.value.likes.filter(id => id != action.payload);
    },
  },
});

export default likesSlice;
