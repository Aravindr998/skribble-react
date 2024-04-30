const { Server } = require("socket.io");

const connectToSocketServer = (server) => {
  console.log("Here");
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

module.exports = connectToSocketServer;
