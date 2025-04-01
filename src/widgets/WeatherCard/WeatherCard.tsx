import styles from "./WeatherCard.module.scss";
import { IWeatherCard } from "./WeatherCard.interface.ts";
import { Text, Title, CardDegrees } from "../../shared/ui/index.ts";
import { getFormattedDate, getWeekDayName } from "./WeatherCard.utils.ts";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../shared/store/themeAtom.ts";

function WeatherCard({
  weekDay,
  date,
  month,
  dayDegrees,
  nightDegrees,
  weather,
  isToday = false,
}: IWeatherCard) {
  const theme = useAtomValue(themeAtom);
  return (
    <div className={styles["weather-card"]}>
      <div className={styles["date-info"]}>
        <Title size="small">{getWeekDayName(weekDay, isToday)}</Title>
        <Text size="middle" color="secondary">
          {getFormattedDate(month, date)}
        </Text>
      </div>
      <div className={styles["weather-icon"]}>{weather}</div>
      {theme === "dark" && isToday ? (
        <div className={styles.degrees}>
          <CardDegrees degrees={nightDegrees} color="primary" time="night" />
          <CardDegrees degrees={dayDegrees} color="secondary" time="day" />
        </div>
      ) : (
        <div className={styles.degrees}>
          <CardDegrees degrees={dayDegrees} color="primary" time="day" />
          <CardDegrees degrees={nightDegrees} color="secondary" time="night" />
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
