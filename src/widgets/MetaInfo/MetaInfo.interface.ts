import { ILocation } from "../../entities/weather/index.ts";

export interface IMetaInfo {
  data: ILocation | undefined;
	isLoading: boolean;
}
