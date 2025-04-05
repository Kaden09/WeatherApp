import { ILocation } from "../../../entities/weather/index.ts";

export interface IClock {
  location: ILocation|undefined;
}
