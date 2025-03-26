import styles from "./RealTimeClock.module.scss";
import { ClockIcon } from "../../../assets/index.ts";
import { Title, Clock } from "../index.ts";
import { useWeather } from "../../../features/weather/index.ts";
import { WEEK_DAYS } from "../../constants/weekDays.ts";

function RealTimeClock() {
  const { data } = useWeather();
  if (data !== undefined)
    return (
      <div className={styles["real-time-clock"]}>
        <ClockIcon />
        <div className={styles.data}>
          <Title size="middle">{WEEK_DAYS[new Date().getDay()]}, </Title>
          <Clock />
        </div>
      </div>
    );
}

export default RealTimeClock;
