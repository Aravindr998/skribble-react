require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
const authRouter = require("./routers/authRouter");
const connectToSocketServer = require("./socket/server");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("./public"));
app.use(cors());

let server;

db()
  .then(() => {
    server = app.listen(PORT, () => {
      console.log(`Server Listening at http://localhost:${PORT} 🔥`);
    });
    connectToSocketServer(server);
  })
  .catch((error) => {
    console.log("Couldn't Start Server 🥲");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRouter);
