import { IForecast } from "../../entities/weather/index.ts";

export interface IAdditionalInfoList {
  forecast?: IForecast[];
}
