import axios from "axios";
// import { API_URL } from "../constants";
// constant.js export const API_URL = "https://api.coingecko.com/api/v3/coins";
const API_URL = "https://api.coingecko.com/api/v3/coins";
export const get100Coins = () => {
  const coins = axios
    .get(
      `${API_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (coins) return coins;
  else return;
};
