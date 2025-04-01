export interface ILocation {
  name: string;
  tz_id: string;
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
  forecast: {
    forecastday: IForecast[];
  };
}
