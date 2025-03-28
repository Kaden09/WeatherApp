import { ILocation } from "../../../entities/weather/index.ts";

export interface IClock {
  data: ILocation|undefined;
}
