const { Schema, model } = require("mongoose");

const coinSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Coin = model("Coin", coinSchema);

module.exports = Coin;
