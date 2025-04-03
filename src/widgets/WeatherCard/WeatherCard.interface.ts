export interface IWeatherCard {
  weekDay: number;
  date: number;
  month: number;
  dayDegrees: number;
  nightDegrees: number;
  weatherIcon: React.ReactNode;
  condition: string;
  isToday: boolean;
}
