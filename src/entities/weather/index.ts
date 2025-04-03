export { default as fetchWeather } from "./api/weather.ts";
export { default as searchCities } from "./api/searchCities.ts";
export type {
	ICurrent,
  ILocation,
  IAstro,
  IDay,
  IHour,
  IForecast,
  IWeather,
} from "./types/weather.interface.ts";
export type { ISearchCities } from "./types/searchCities.interface.ts";
