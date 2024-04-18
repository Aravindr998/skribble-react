import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "../slices/playerSlice";
import loaderSlice from "../slices/loaderSlice";

const store = configureStore({
  reducer: {
    player: playerSlice,
    loader: loaderSlice,
  },
});

export default store;
