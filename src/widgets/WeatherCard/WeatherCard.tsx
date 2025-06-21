import styles from "./WeatherCard.module.scss";
import { IWeatherCard } from "./WeatherCard.interface.ts";
import { Text, Title, CardDegrees } from "../../shared/ui/index.ts";
import { getFormattedDate, getWeekDayName } from "./WeatherCard.utils.ts";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../shared/store/themeAtom.ts";
import { useMediaQuery } from "react-responsive";

function WeatherCard({
  weekDay,
  date,
  month,
  dayDegrees,
  nightDegrees,
  weatherIcon,
  condition,
  isToday = false,
}: IWeatherCard) {
  const theme = useAtomValue(themeAtom);
  const isMobile = useMediaQuery({ maxWidth: 400 });

  if (isMobile) {
    return (
      <div className={styles["weather-card"]}>
        <div className={styles["date-info"]}>
          <Title size="small">
            {getWeekDayName(weekDay, isToday).substring(0, 3)}
          </Title>
          <Text size="middle" color="secondary">
            {getFormattedDate(month, date, isMobile)}
          </Text>
        </div>
        <div className={styles["weather-icon"]}>{weatherIcon}</div>
        <div className={styles["mobile-degrees-test"]}>
          <CardDegrees
            degrees={dayDegrees}
            color={isToday && theme === "dark" ? "secondary" : "primary"}
            time="day"
          />
          <CardDegrees
            degrees={nightDegrees}
            color={isToday && theme === "dark" ? "primary" : "secondary"}
            time="night"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles["weather-card"]}>
      <div className={styles["date-info"]}>
        <Title size="small">{getWeekDayName(weekDay, isToday)}</Title>
        <Text size="middle" color="secondary">
          {getFormattedDate(month, date, isMobile)}
        </Text>
      </div>
      <div className={styles["weather-icon"]}>{weatherIcon}</div>
      <div className={styles["condition-info"]}>
        <div className={styles.degrees}>
          <CardDegrees
            degrees={dayDegrees}
            color={isToday && theme === "dark" ? "secondary" : "primary"}
            time="day"
          />
          <CardDegrees
            degrees={nightDegrees}
            color={isToday && theme === "dark" ? "primary" : "secondary"}
            time="night"
          />
        </div>
        <Text color="secondary" size="middle" className={styles.condition}>
          {condition}
        </Text>
      </div>
    </div>
  );
}

export default WeatherCard;
