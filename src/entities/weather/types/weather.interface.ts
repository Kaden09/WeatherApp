export interface ILocation {
  name: string;
  tz_id: string;
}

export interface ICurrent {
  temp_c: number;
  date: string;
  cloud: number;
  wind_kph: number;
  precip_mm: number;
  humidity: number;
  condition: {
    text: string;
  };
}

export interface IAstro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

export interface IDay {
  maxtemp_c: number;
  mintemp_c: number;
  maxwind_kph: number;
	daily_chance_of_snow: number;
	daily_chance_of_rain: number;
  totalprecip_mm: number;
  avghumidity: number;

  condition: {
    text: string;
  };
}

export interface IHour {
  cloud: number;
  temp_c: number;
  feelslike_c: number;
  chance_of_rain: number;
  chance_of_snow: number;
  condition: {
    text: string;
  };
}

export interface IForecast {
  date: string;
  day: IDay;
  astro: IAstro;
  hour: IHour[];
}

export interface IWeather {
  location: ILocation;
  current: ICurrent;
  forecast: {
    forecastday: IForecast[];
  };
}
