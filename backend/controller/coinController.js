const Coin = require("../model/coinModel");

exports.getAllCoin = async (req, res) => {
  const coins = await Coin.find({});

  res.status(200).json({
    result: "Successfull",
    data: coins,
  });
};
