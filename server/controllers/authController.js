const db = require("../database/db");

const createRoom = async (req, res) => {
  try {
    const { playerName } = req.body;
    const player = await db.addPlayer(playerName);
    const room = await db.createRoom(player);
    return res.status(201).json({
      player,
      room,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Something went wrong, Please try again later",
    });
  }
};

module.exports = {
  createRoom,
};
