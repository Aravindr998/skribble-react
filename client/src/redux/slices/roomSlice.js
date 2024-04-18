import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import networkRequest, {
  endPoints,
  httpMethods,
} from "../../network/networkRequest";
import { setPlayer } from "./playerSlice";

const initialState = {
  id: "",
  owner: "",
  totalPlayers: 8,
  drawTime: 80,
  rounds: 3,
  wordCount: 1,
  hintCount: 0,
  players: [],
};

export const createRoom = createAsyncThunk(
  "room/createRoom",
  async (playerName, { dispatch }) => {
    console.log(playerName);
    const data = await networkRequest(
      endPoints.createRoom,
      { method: httpMethods.post, body: { playerName } },
      dispatch
    );
    dispatch(setPlayer(data?.player));
    return data?.room;
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    clearRoom: (state, action) => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(createRoom.fulfilled, (state, action) => {
      state.id = action.payload?._id;
      state.owner = action.payload?.owner;
      state.totalPlayers = action.payload?.totalPlayers;
      state.drawTime = action.payload?.drawTime;
      state.rounds = action.payload?.rounds;
      state.wordCount = action.payload.wordCount;
      state.hintCount = action.payload.hintCount;
      state.players = action.payload.players;
    });
  },
});

export default roomSlice.reducer;

export const { clearRoom } = roomSlice.actions;
