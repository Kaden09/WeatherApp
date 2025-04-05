export function getPrecipChanceType(currentMonth: number, forecast: any) {
  return currentMonth > 10 ||
    currentMonth < 2 ||
    forecast[0].day.daily_chance_of_snow > 0
    ? "Chance of Snow"
    : "Chance of Rain";
}

export function getPrecipChanceValue(currentMonth: number, forecast: any) {
  return currentMonth > 10 ||
    currentMonth < 2 ||
    forecast[0].day.daily_chance_of_snow > 0
    ? forecast[0].day.daily_chance_of_snow
    : forecast[0].day.daily_chance_of_rain;
}
