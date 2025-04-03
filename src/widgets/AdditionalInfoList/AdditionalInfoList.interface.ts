import { ICurrent, IForecast } from "../../entities/weather/index.ts";

export interface IAdditionalInfoList {
  current?: ICurrent;
  forecast?: IForecast[];
}
