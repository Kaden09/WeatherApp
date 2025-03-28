import { IAstro } from "../../entities/weather/index.ts";

export interface IAstroTimes {
  data?: IAstro;
  isLoading: boolean;
}
