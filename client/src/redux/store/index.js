import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "../slices/playerSlice";
import loaderSlice from "../slices/loaderSlice";
import roomSlice from "../slices/roomSlice";
import socketSlice from "../slices/socketSlice";

const store = configureStore({
  reducer: {
    player: playerSlice,
    loader: loaderSlice,
    room: roomSlice,
    socket: socketSlice,
  },
});

export default store;
