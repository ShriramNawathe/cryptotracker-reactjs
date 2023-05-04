import axios from "axios";
// import { API_URL } from "../constants";
// constant.js export const API_URL = "https://api.coingecko.com/api/v3/coins";
const API_URL = "https://api.coingecko.com/api/v3/coins";
export const getCoinData = (id) => {
  const coinData = axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (coinData) return coinData;
  else return;
};
