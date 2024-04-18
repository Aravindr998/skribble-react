const { default: mongoose } = require("mongoose");
const playerModel = require("../models/Player");
const roomModel = require("../models/Room");

const addPlayer = async (playerName) => {
  const player = new playerModel({
    playerName,
  });
  await player.save();
  return player;
};

const createRoom = async (owner) => {
  const room = new roomModel({
    owner: owner.id,
  });
  await room.save();
  return room;
};

module.exports = {
  addPlayer,
  createRoom,
};
