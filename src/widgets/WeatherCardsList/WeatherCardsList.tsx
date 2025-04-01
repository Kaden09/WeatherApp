import styles from "./WeatherCardsList.module.scss";
import { useState, useEffect } from "react";
import { WeatherCard } from "../index.ts";
import { WeatherIcon, SkeletonLoader } from "../../shared/ui/index.ts";
import { IWeatherCardsList } from "./WeatherCardsList.interface.ts";

function WeatherCardsList({ forecast, isLoading }: IWeatherCardsList) {
  const [weekDaysOrder, setWeekDaysOrder] = useState<number[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (forecast) {
      setCurrentDate(new Date(forecast[0].date));
    }
    const defautOrder = [0, 1, 2, 3, 4, 5, 6];
    setWeekDaysOrder([
      ...defautOrder.slice(currentDate.getDay()),
      ...defautOrder.slice(0, currentDate.getDay()),
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
      {forecast &&
        weekDaysOrder.map((day, i) => {
          const date = new Date(forecast[i].date);
          return (
            <WeatherCard
              key={day}
              weekDay={day}
              date={date.getDate()}
              month={date.getMonth()}
              dayDegrees={Math.round(forecast[i].day.maxtemp_c)}
              nightDegrees={Math.round(forecast[i].day.mintemp_c)}
              weather={
                <WeatherIcon
                  condition={forecast[i].day.condition.text}
                  isToday={currentDate.getDay() === day}
                />
              }
              isToday={currentDate.getDay() === day}
            />
          );
        })}
    </div>
  );
}

export default WeatherCardsList;
