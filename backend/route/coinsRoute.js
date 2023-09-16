const express = require("express");
const coinsController = require("../controller/coinController");

const router = express.Router();

router.get("/getAllCoins", coinsController.getAllCoin);

module.exports = router;
