import { weatherApi } from "../../../shared/config/index.ts";
import { IWeather } from "../types/weather.interface.ts";

async function fetchWeather(city: string): Promise<IWeather> {
  try {
    let { data } = await weatherApi.get<IWeather>(`/forecast.json`, {
      params: {
        q: city,
        days: 3,
        lang: "en",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export default fetchWeather;
