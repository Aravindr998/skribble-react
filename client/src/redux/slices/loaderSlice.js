import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state, action) => {
      return true;
    },
    hideLoader: (state, action) => {
      return false;
    },
  },
});

export default loaderSlice.reducer;

export const { showLoader, hideLoader } = loaderSlice.actions;
