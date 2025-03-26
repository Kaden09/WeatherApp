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

interface IHour {
  cloud: number;
  fellslike_c: number;
  chance_of_rain: number;
  chance_of_snow: number;
}

interface IForecast {
  date: string;
  day: IDay;
  astro: IAstro;
  hour: IHour;
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
