const fetchDataFromAPI = require("./coinSeed");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });

mongoose.connect(process.env.DB).then(async () => {
  console.log("Seeding started");
  await fetchDataFromAPI();
  console.log("Seeding end");
  process.exit(0);
});
