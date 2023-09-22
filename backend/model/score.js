const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  playerName: { type: String, required: true },
  time: { type: Number, required: true },
  moves: { type: Number, required: false },
  difficulty: { type: String, required: true }
});

module.exports = mongoose.model("Score", scoreSchema);
