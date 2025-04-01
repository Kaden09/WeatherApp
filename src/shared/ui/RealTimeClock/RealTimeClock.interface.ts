import { ILocation } from "../../../entities/weather/index.ts";

export interface IRealTimeClock {
  data: ILocation | undefined;
  className?: string;
}
