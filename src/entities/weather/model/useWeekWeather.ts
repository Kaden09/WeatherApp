import { getWeekWeather } from "../api/weekWeather.ts";
import { useState, useEffect } from "react";

function useWeekWeather(city: string) {
  const [weekWeather, setWeekWeather] = useState<any>();

  useEffect(() => {
    async function setWeather() {
      let weather = await getWeekWeather(city);
      setWeekWeather(weather);
    }
    setWeather();
  }, [city]);
  return weekWeather;
}

export default useWeekWeather;
