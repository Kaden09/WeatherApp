import { API_KEY } from "../../../shared/config/api/api.ts";

export async function getWeekWeather(city: string) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`,
  );
  let data = await response.json();
  return data.forecast.forecastday;
}
