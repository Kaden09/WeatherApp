interface IAstro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

interface IDay {
  maxtemp_c: number;
  mintemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avghumidity: number;

  condition: {
    text: string;
  };
}

interface IForecast {
  date: string;
  day: IDay;
  astro: IAstro;
}

export interface IWeather {
  location: {
    name: string;
    tz_id: string;
  };
  forecast: {
    forecastday: IForecast[];
  };
}
