const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      required: [true, "Owner is required"],
      ref: "Players",
    },
    players: {
      type: [mongoose.Types.ObjectId],
      default: [],
      ref: "Players",
    },
    totalPlayers: {
      type: Number,
      default: 8,
      required: [true, "Number of players is required"],
    },
    drawTime: {
      type: Number,
      default: 80,
      required: [true, "Draw time is required"],
    },
    rounds: {
      type: Number,
      default: 3,
      required: [true, "Number of rounds is required"],
    },
    wordCount: {
      type: Number,
      default: 1,
      min: [1, "Minimum word length is 1"],
      max: [3, "Maximum word length is 3"],
    },
    hintCount: {
      type: Number,
      default: 0,
      min: [0, "Invalid hint count"],
      max: [2, "Maximum number of hints is two"],
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
