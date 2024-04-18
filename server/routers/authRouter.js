const express = require("express");
const { validateCreateRoom } = require("../helpers/authHelper");
const { createRoom } = require("../controllers/authController");

const router = express.Router();

router.post("/create-room", validateCreateRoom, createRoom);

module.exports = router;
