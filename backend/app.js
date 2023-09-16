const express = require("express");
const cors = require("cors");
const coinsRoute = require("./route/coinsRoute");

const app = express();
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/api/v1/coin", coinsRoute);

module.exports = app;
