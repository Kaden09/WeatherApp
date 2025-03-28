import { ILocation } from "../../../entities/weather/index.ts";

export interface IRealTimeClock {
  data: ILocation | undefined;
  isLoading: boolean;
  className?: string;
}
