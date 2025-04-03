import { ICurrent, IForecast } from "../../entities/weather/index.ts";

export interface IMainContent {
  current?: ICurrent;
  forecast?: IForecast[];
}
