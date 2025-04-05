import styles from "./WeatherCardsList.module.scss";
import { useState, useEffect } from "react";
import { WeatherCard } from "../index.ts";
import { WeatherIcon, SkeletonLoader } from "../../shared/ui/index.ts";
import { IWeatherCardsList } from "./WeatherCardsList.interface.ts";
import { isLoadingAtom } from "../../shared/store/weatherAtoms.ts";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../shared/store/themeAtom.ts";
import { useMediaQuery } from "react-responsive";

function WeatherCardsList({ forecast }: IWeatherCardsList) {
  const [weekDaysOrder, setWeekDaysOrder] = useState<number[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const isLoading = useAtomValue(isLoadingAtom);
  const theme = useAtomValue(themeAtom);
  const isMobile = useMediaQuery({ maxWidth: 400 });

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
        {weekDaysOrder.map((_) => (
          <SkeletonLoader
            width={isMobile ? 40 : 103}
            height={isMobile ? 80 : 160}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {forecast &&
        weekDaysOrder.map((day, i) => {
          const date = new Date(forecast[i].date);
          const dayCondition = forecast[i].day.condition.text;
          const nightCondition = forecast[i].hour[0].condition.text;
          return (
            <WeatherCard
              key={day}
              weekDay={day}
              date={date.getDate()}
              month={date.getMonth()}
              dayDegrees={Math.round(forecast[i].day.maxtemp_c)}
              nightDegrees={Math.round(forecast[i].day.mintemp_c)}
              weatherIcon={
                <WeatherIcon
                  condition={theme === "dark" ? nightCondition : dayCondition}
                  isToday={currentDate.getDay() === day}
                />
              }
              condition={theme === "dark" ? nightCondition : dayCondition}
              isToday={currentDate.getDay() === day}
            />
          );
        })}
    </div>
  );
}

export default WeatherCardsList;
