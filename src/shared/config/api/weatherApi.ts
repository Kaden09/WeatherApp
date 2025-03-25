import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  timeout: 5000,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
