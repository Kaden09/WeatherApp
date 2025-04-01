import { IForecast } from "../../entities/weather/types/weather.interface.ts";

export interface IMainContent {
  forecast?: IForecast[];
}
