import { createSlice } from "@reduxjs/toolkit";
import storage from "../../modules/storage";

const likesSlice = createSlice({
  name: "likes",
  initialState: { value: storage.getLikes() },
  reducers: {
    like: (state, action) => {
      const newLikes = [...state.value];
      const id = action.payload;

      !newLikes.includes(id) && newLikes.push(id);
      
      state.value = newLikes;
      storage.setLikes(newLikes);
    },
    unLike: (state, action) => {
      const newLikes = state.value.filter((id) => id != action.payload);
      state.value = newLikes;
      storage.setLikes(newLikes);
    },
  },
});

export default likesSlice;
