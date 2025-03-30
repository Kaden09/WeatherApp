import { ISearchCities } from "../../entities/weather/index.ts";

export interface ISearchResults {
  cities?: ISearchCities[];
  isLoading: boolean;
  className?: string;
  style?: React.CSSProperties;
}
