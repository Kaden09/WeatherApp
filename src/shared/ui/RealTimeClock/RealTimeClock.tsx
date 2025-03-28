import { ClockIcon } from "../../../assets/index.ts";
import { Title, Clock, IconWithText, SkeletonLoader } from "../index.ts";
import { WEEK_DAYS } from "../../constants/weekDays.ts";
import styles from "./RealTimeClock.module.scss";
import cx from "classix";
import { IRealTimeClock } from "./RealTimeClock.interface.ts";

function RealTimeClock({ data, isLoading, className }: IRealTimeClock) {
  const cls = cx(styles["real-time-clock"], className);
  return (
    <IconWithText
      icon={
        isLoading ? <SkeletonLoader width={26} height={26} /> : <ClockIcon />
      }
      className={cls}
    >
      {isLoading ? (
        <SkeletonLoader width={130} height={26} />
      ) : (
        <div className={styles["real-time-clock"]}>
          {" "}
          <Title size="large">{WEEK_DAYS[new Date().getDay()]}, </Title>
          <Clock data={data} />
        </div>
      )}
    </IconWithText>
  );
}

export default RealTimeClock;
