const validateCreateRoom = (req, res, next) => {
  const { playerName } = req.body;
  if (!playerName || !playerName.trim()) {
    return res.json({ message: "Player name  is required" });
  }
  next();
};

module.exports = {
  validateCreateRoom,
};
