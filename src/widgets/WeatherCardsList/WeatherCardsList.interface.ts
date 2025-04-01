import { IForecast } from "../../entities/weather/index.ts";

export interface IWeatherCardsList {
  forecast: IForecast[] | undefined;
}
