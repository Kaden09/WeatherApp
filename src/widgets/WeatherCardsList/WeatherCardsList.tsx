import styles from "./WeatherCardsList.module.scss";
import { useState, useEffect } from "react";
import { WeatherCard } from "../index.ts";
import { WeatherIcon, SkeletonLoader } from "../../shared/ui/index.ts";
import { useSetAtom } from "jotai";
import { cityAtom } from "../../shared/store/weatherAtoms.ts";
import { IWeatherCardsList } from "./WeatherCardsList.interface.ts";

function WeatherCardsList({
  location,
  forecast,
  isLoading,
}: IWeatherCardsList) {
  const [weekDaysOrder, setWeekDaysOrder] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6,
  ]);

  useEffect(() => {
    const currentDay = new Date().getDay();
    setWeekDaysOrder([
      ...weekDaysOrder.slice(currentDay),
      ...weekDaysOrder.slice(0, currentDay),
    ]);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.list}>
        {weekDaysOrder.map((el) => (
          <SkeletonLoader key={el} width={103} height={160} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {forecast !== undefined &&
        weekDaysOrder.map((el, i) => (
          <WeatherCard
            key={el}
            weekDay={el}
            date={new Date(forecast[i].date).getDate()}
            month={new Date(forecast[i].date).getMonth()}
            dayDegrees={Math.round(forecast[i].day.maxtemp_c)}
            nightDegrees={Math.round(forecast[i].day.mintemp_c)}
            weather={<WeatherIcon condition={forecast[i].day.condition.text} />}
            isToday={new Date().getDay() === el}
          />
        ))}
    </div>
  );
}

export default WeatherCardsList;
