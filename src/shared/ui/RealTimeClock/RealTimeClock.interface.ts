import { ILocation } from "../../../entities/weather/index.ts";

export interface IRealTimeClock {
  location: ILocation | undefined;
  className?: string;
}
