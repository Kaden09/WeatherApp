import styles from "./WeatherCardsList.module.scss";
import { useState, useEffect } from "react";
import { WeatherCard } from "../index.ts";
import { useWeekWeather } from "../../entities/weather/index.ts";
import { WeatherIcon } from "../../shared/ui/index.ts";

function WeatherCardsList() {
  const [weekDaysOrder, setWeekDaysOrder] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6,
  ]);
  const weekDays = useWeekWeather("Budennovsk");

  useEffect(() => {
    const currentDay = new Date().getDay();
    setWeekDaysOrder([
      ...weekDaysOrder.slice(currentDay),
      ...weekDaysOrder.slice(0, currentDay),
    ]);
  }, []);

  return (
    <div className={styles.list}>
      {weekDays !== undefined &&
        weekDaysOrder.map((el, i) => (
          <WeatherCard
            weekDay={el}
            date={new Date(weekDays[i].date).getDate()}
            month={new Date(weekDays[i].date).getMonth()}
            dayDegrees={Math.round(weekDays[i].day.maxtemp_c)}
            nightDegrees={Math.round(weekDays[i].day.mintemp_c)}
            weather={<WeatherIcon condition={weekDays[i].day.condition.text} />}
          />
        ))}
    </div>
  );
}

export default WeatherCardsList;
