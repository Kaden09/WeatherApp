import styles from "./WeatherCard.module.scss";
import { IWeatherCard } from "./WeatherCard.interface.ts";
import { Text, Title } from "../../shared/ui/index.ts";
import { WEEK_DAYS } from "../../shared/constants/weekDays.ts";
import { MONTHS } from "../../shared/constants/months.ts";

function WeatherCard({
  weekDay,
  date,
  month,
  dayDegrees,
  nightDegrees,
  weather,
}: IWeatherCard) {
  return (
    <div className={styles["weather-card"]}>
      <div className={styles["date-info"]}>
        <Title size="small">
          {new Date().getDay() === weekDay ? "Today" : WEEK_DAYS[weekDay]}
        </Title>
        <Text size="middle" color="secondary">
          {MONTHS[month] + " "}
          {date}
        </Text>
      </div>
      <div className={styles["weather-icon"]}>{weather}</div>

      <div className={styles.degrees}>
        <div className={styles["degrees-value"]}>
          <Text color="secondary" size="small">
            day
          </Text>
          <Title size="middle">{dayDegrees}°</Title>
        </div>
        <div className={styles["degrees-value"]}>
          <Text color="secondary" size="small">
            night
          </Text>
          <Title size="middle" color="secondary">
            {nightDegrees}°
          </Title>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
