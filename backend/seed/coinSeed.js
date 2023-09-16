const axios = require("axios");
const Coins = require("../model/coinModel");

async function fetchDataFromAPI() {
  try {
    await Coins.deleteMany({});
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");

    const keyValueArray = Object.entries(response.data);

    const firstTenKeyValuePairs = keyValueArray.slice(0, 10);

    //console.log(firstTenKeyValuePairs);
    const promises = [];
    firstTenKeyValuePairs.forEach((item) => {
      const coinData = { coinName: item[0], ...item[1] };
      //console.log({ coinData });
      promises.push(
        Coins.create({
          coinName: coinData.coinName,
          lastTradedPrice: coinData.last,
          buyPrice: coinData.buy,
          sellPrice: coinData.sell,
          volume: coinData.volume,
          baseUnit: coinData.base_unit,
          name: coinData.name,
        })
      );
    });
    const arr = await Promise.allSettled(promises);
    console.log({ arr });
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw error;
  }
}

module.exports = fetchDataFromAPI;
