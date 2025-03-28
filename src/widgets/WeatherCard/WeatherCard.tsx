import styles from "./WeatherCard.module.scss";
import { IWeatherCard } from "./WeatherCard.interface.ts";
import { Text, Title, CardDegrees } from "../../shared/ui/index.ts";
import { getFormattedDate, getWeekDayName } from "./WeatherCard.utils.ts";

function WeatherCard({
  weekDay,
  date,
  month,
  dayDegrees,
  nightDegrees,
  weather,
  isToday = false,
}: IWeatherCard) {
  return (
    <div className={styles["weather-card"]}>
      <div className={styles["date-info"]}>
        <Title size="small">{getWeekDayName(weekDay, isToday)}</Title>
        <Text size="middle" color="secondary">
          {getFormattedDate(month, date)}
        </Text>
      </div>
      <div className={styles["weather-icon"]}>{weather}</div>
      <div className={styles.degrees}>
        <CardDegrees degrees={dayDegrees} color="primary" time="day" />
        <CardDegrees degrees={nightDegrees} color="secondary" time="night" />
      </div>
    </div>
  );
}

export default WeatherCard;
