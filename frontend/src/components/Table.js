import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import axios from "axios";
import { config } from "../config/config";

function Table() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(`${config.serverUrl}/coin/getAllCoins`);
      setCoins(data.data.data);
    })();
  }, []);

  console.log({ coins });

  return (
    <div className="w-full px-6 mx-auto mt-8">
      <table className="w-full ">
        <thead>
          <tr>
            <th className="p-3 text-gray-400">#</th>
            <th className="p-3  text-gray-400">Platform</th>
            <th className="p-3  text-gray-400">Last Traded Price</th>
            <th className="p-3  text-gray-400">Buy / Sell Price</th>
            <th className="p-3  text-gray-400">Diffrence</th>
            <th className="p-3  text-gray-400">Savings</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((el, i) => (
            <TableRowData {...el} index={i} />
          ))}

          {/* <tr className="bg-slate-700 rounded-sm">
            <td className="p-3 text-white text-lg font-medium">2</td>
            <td className="p-3">
              {" "}
              <div className="flex gap-2 items-center justify-center">
                <img
                  className="w-6	h-6 rounded-full"
                  src="https://play-lh.googleusercontent.com/Cy9QQLHoa4fw4TdD6T08ZJoUWprIye-LRixFn5gdCNADrsW_ij-x6AN1X-kOeAlOHGA=w240-h480-rw"
                />
                <p className="text-white text-lg font-medium">Bitbns</p>
              </div>
            </td>
            <td className="p-3 text-white text-lg font-medium">₹ 28,83,906</td>
            <td className="p-3 text-white text-lg font-medium">
              ₹ 28,55,164 / ₹ 28,82,157
            </td>
            <td className="p-3 text-teal-300	 text-lg font-medium">8.58 %</td>
            <td className="p-3 text-teal-300	 text-lg font-medium">
              <div className="flex  items-center justify-center">
                <AiFillCaretUp size={12} color="text-teal-300" />
                <p>₹ 2,27,796</p>
              </div>
            </td>
          </tr>
          <tr className="bg-slate-700 rounded-sm">
            <td className="p-3 text-white text-lg font-medium">3</td>
            <td className="p-3">
              {" "}
              <div className="flex gap-2 items-center justify-center">
                <img
                  className="w-6	h-6 rounded-full"
                  src="https://play-lh.googleusercontent.com/dCuvZ1TmOkyCtm2XOxvT7UMV2zge5gTemfOa2CfXU4vGlivHYp2v7dsYHhXIEXRFVFRZ=w240-h480-rw"
                />
                <p className="text-white text-lg font-medium">Colodax</p>
              </div>
            </td>
            <td className="p-3 text-white text-lg font-medium">₹ 25,46,035</td>
            <td className="p-3 text-white text-lg font-medium">
              ₹ 25,33,304 / ₹ 28,51,559
            </td>
            <td className="p-3 text-red-500	 text-lg font-medium">-4.14 %</td>
            <td className="p-3 text-red-500	 text-lg font-medium">
              <div className="flex  items-center justify-center">
                <AiFillCaretDown size={12} color="text-red-500" />
                <p>₹ 1,10,498</p>
              </div>
            </td>
          </tr>
          <tr className="bg-slate-700 rounded-sm">
            <td className="p-3 text-white text-lg font-medium">4</td>
            <td className="p-3">
              {" "}
              <div className="flex gap-2 items-center justify-center">
                <img
                  className="w-6	h-6 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWTbw7D34BCuNiv3zeS6Mfmh23PjPLwoadw&usqp=CAU"
                />
                <p className="text-white text-lg font-medium">Zebpay</p>
              </div>
            </td>
            <td className="p-3 text-white text-lg font-medium">₹ 25,46,035</td>
            <td className="p-3 text-white text-lg font-medium">
              ₹ 25,33,304 / ₹ 28,51,559
            </td>
            <td className="p-3 text-red-500	 text-lg font-medium">-0.23 %</td>
            <td className="p-3 text-red-500	 text-lg font-medium">
              <div className="flex  items-center justify-center">
                <AiFillCaretDown size={12} color="text-red-500" />
                <p>₹ 6,110</p>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

const TableRowData = ({
  baseUnit,
  buyPrice,
  lastTradedPrice,
  name,
  sellPrice,
  volume,
  coinName,
  _id,
  index,
}) => {
  function calculatePercentageDifference(originalValue, newValue) {
    if (originalValue === 0 && newValue === 0) {
      return 0;
    }
    // Calculate the absolute difference between the original and new values
    const absoluteDifference = Math.abs(originalValue - newValue);

    // Calculate the percentage difference
    const percentageDifference = (absoluteDifference / originalValue) * 100;

    return percentageDifference;
  }

  const difference = calculatePercentageDifference(
    parseFloat(buyPrice),
    parseFloat(sellPrice)
  ).toFixed(2);
  const colorClass = difference > 0 ? "text-green-500" : "text-red-500";
  console.log({ colorClass });
  return (
    <tr key={_id} className="bg-slate-700 rounded-sm">
      <td className="p-3 text-white text-lg font-medium">{index + 1}</td>
      <td className="p-3">
        {" "}
        <div className="flex gap-2 items-center justify-center">
          {/* <img
            className="w-6	h-6 rounded-full"
            alt=""
            src="https://play-lh.googleusercontent.com/JoikhtJAr-CEcX6ptDKRSTYB8RY5dW3q_pPbqtpk7MNMNyTZ0nZLvTDe4rx8tRb-JA"
          /> */}
          <p className="text-white text-lg font-medium">{coinName}</p>
        </div>
      </td>
      <td className="p-3 text-white text-lg font-medium">
        ₹ {lastTradedPrice}
      </td>
      <td className="p-3 text-white text-lg font-medium">
        ₹ {buyPrice} / ₹ {sellPrice}
      </td>
      <td className={`p-3 ${colorClass} text-lg font-medium`}>
        {difference} %
      </td>
      <td className={`p-3 ${colorClass}	text-lg font-medium`}>
        <div className="flex  items-center justify-center">
          {difference > 0 ? (
            <AiFillCaretUp size={12} color="text-teal-300" />
          ) : (
            <AiFillCaretDown size={12} color={colorClass} />
          )}

          <p>₹ {lastTradedPrice}</p>
        </div>
      </td>
    </tr>
  );
};

export default Table;
