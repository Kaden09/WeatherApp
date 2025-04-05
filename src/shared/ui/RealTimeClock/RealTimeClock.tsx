import { ClockIcon } from "../../../assets/index.ts";
import { Title, Clock, IconWithText, SkeletonLoader } from "../index.ts";
import { WEEK_DAYS } from "../../constants/index.ts";
import styles from "./RealTimeClock.module.scss";
import cx from "classix";
import { IRealTimeClock } from "./RealTimeClock.interface.ts";
import { isLoadingAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";
import { useMediaQuery } from "react-responsive";

function RealTimeClock({ location, className }: IRealTimeClock) {
  const cls = cx(styles["real-time-clock"], className);
  const isLoading = useAtomValue(isLoadingAtom);
  const isMobile = useMediaQuery({ maxWidth: 400 });

  return (
    <IconWithText
      icon={
        isLoading ? (
          <SkeletonLoader
            width={isMobile ? 16 : 26}
            height={isMobile ? 16 : 26}
          />
        ) : (
          <ClockIcon />
        )
      }
      className={cls}
    >
      {isLoading ? (
        <SkeletonLoader
          width={isMobile ? 80 : 130}
          height={isMobile ? 16 : 26}
        />
      ) : (
        <div className={styles["real-time-clock"]}>
          <Title size={isMobile ? "middle" : "large"}>
            {WEEK_DAYS[new Date().getDay()]},{" "}
          </Title>
          <Clock location={location} />
        </div>
      )}
    </IconWithText>
  );
}

export default RealTimeClock;
