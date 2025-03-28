import { ILocation, IForecast } from "../../entities/weather/index.ts";

export interface IWeatherCardsList {
  location: ILocation | undefined;
  forecast: IForecast[] | undefined;
  isLoading: boolean;
}
