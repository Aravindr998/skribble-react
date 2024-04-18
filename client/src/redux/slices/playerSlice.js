import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  playerName: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      return { id: action.payload._id, playerName: action.payload._id };
    },
    clearPlayer: (state, action) => ({ ...initialState }),
  },
});

export default playerSlice.reducer;
export const { setPlayer, clearPlayer } = playerSlice.actions;
