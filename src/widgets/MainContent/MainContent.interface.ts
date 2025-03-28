import { IWeather } from "../../entities/weather/types/weather.interface.ts";

export interface IMainContent {
  data: IWeather | undefined;
	isLoading: boolean;
}
