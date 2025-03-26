import styles from "./WeatherCardsList.module.scss";
import { useState, useEffect } from "react";
import { WeatherCard } from "../index.ts";
import { WeatherIcon } from "../../shared/ui/index.ts";
import { useWeather } from "../../features/weather/index.ts";
import { useSetAtom } from "jotai";
import { cityAtom } from "../../shared/store/weatherAtoms.ts";

function WeatherCardsList() {
  const [weekDaysOrder, setWeekDaysOrder] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6,
  ]);
  const { data, isLoading, error } = useWeather();
  const setCity = useSetAtom(cityAtom);
  const forecastDays = data?.forecast.forecastday || [];

  useEffect(() => {
    const currentDay = new Date().getDay();
    setWeekDaysOrder([
      ...weekDaysOrder.slice(currentDay),
      ...weekDaysOrder.slice(0, currentDay),
    ]);
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      setCity(data.location.name + ", " + data.location.tz_id.split("/")[0]);
    }
  }, [data]);

  if (isLoading) return <div>Loading</div>;
  if (error) console.log(error);

  return (
    <div className={styles.list}>
      {data !== undefined &&
        weekDaysOrder.map((el, i) => (
          <WeatherCard
            key={el}
            weekDay={el}
            date={new Date(forecastDays[i].date).getDate()}
            month={new Date(forecastDays[i].date).getMonth()}
            dayDegrees={Math.round(forecastDays[i].day.maxtemp_c)}
            nightDegrees={Math.round(forecastDays[i].day.mintemp_c)}
            weather={
              <WeatherIcon condition={forecastDays[i].day.condition.text} />
            }
          />
        ))}
    </div>
  );
}

export default WeatherCardsList;
