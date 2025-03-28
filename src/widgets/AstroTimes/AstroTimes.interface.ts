import { IAstro } from "../../entities/weather/index.ts";

export interface IAstroTimes {
  data: IAstro | undefined;
	isLoading: boolean;
}
