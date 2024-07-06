import { createSlice } from "@reduxjs/toolkit";
import storage from "../../modules/storage";

const likesSlice = createSlice({
  name: "likes",
  initialState: { value: storage.getLikes() },
  reducers: {
    like: (state, action) => {
      const likesCopy = [...state.value];
      const newLike = action.payload;

      likesCopy.every(like => like.id !== newLike.id) && likesCopy.push(newLike);

      state.value = likesCopy;
      storage.setLikes(likesCopy);
    },
    unLike: (state, action) => {
      const newLikes = state.value.filter((like) => like.id !== action.payload);
      state.value = newLikes;
      storage.setLikes(newLikes);
    },
  },
});

export default likesSlice;
