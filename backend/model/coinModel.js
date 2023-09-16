const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  coinName: {
    type: String,
    required: [true, "Coin name is required"],
  },

  lastTradedPrice: {
    type: Number,
    required: [true, "Last Traded Price is required"],
  },

  buyPrice: {
    type: Number,
    required: [true, "Buy Price is required"],
  },

  sellPrice: {
    type: Number,
    required: [true, "Sell Price is required"],
  },

  volume: {
    type: Number,
    required: [true, "Volume Price is required"],
  },

  baseUnit: {
    type: String,
    required: [true, "Base unit is required"],
  },
});

const Coins = mongoose.model("Coins", coinSchema);
module.exports = Coins;
