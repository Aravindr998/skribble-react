import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../socket";

const initialState = {
  isConnected: socket.connected,
};

const socketSlice = createSlice({
  name: "socketSlice",
  initialState,
  reducers: {
    setConnection: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export default socketSlice.reducer;
export const { setConnection } = socketSlice.actions;
