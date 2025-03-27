import { ClockIcon } from "../../../assets/index.ts";
import { Title, Clock, IconWithText } from "../index.ts";
import { WEEK_DAYS } from "../../constants/weekDays.ts";
import styles from "./RealTimeClock.module.scss";

function RealTimeClock() {
  return (
    <IconWithText icon={<ClockIcon />} className={styles["real-time-clock"]}>
      <Title size="large">{WEEK_DAYS[new Date().getDay()]}, </Title>
      <Clock />
    </IconWithText>
  );
}

export default RealTimeClock;
