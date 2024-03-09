import { MD5 } from "crypto-js";

const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
export const xAuth = MD5(`Valantis_${currentDate}`).toString();

export const API_URL = "https://api.valantis.store:41000";

export const API_HEADERS = {
  "Content-Type": "application/json",
  "X-Auth": xAuth,
};
