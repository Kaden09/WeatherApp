import styles from "./Clock.module.scss";
import { useEffect, useMemo } from "react";
import { Title } from "../index.ts";
import { IClock } from "./Clock.interface.ts";
import { useAtom } from "jotai";
import { timeAtom } from "../../store/timeAtom.ts";
import { useMediaQuery } from "react-responsive";

function Clock({ location }: IClock) {
  const [time, setTime] = useAtom(timeAtom);
  const isMobile = useMediaQuery({ maxWidth: 400 });

  const timeZone = useMemo(() => location?.tz_id, [location]);

  useEffect(() => {
    if (!timeZone) return;

    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-EN", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(now));
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone]);

  const [hours, minutes] = time.split(":");

  return (
    <div className={styles.clock}>
      <Title size={isMobile ? "middle" : "large"}>{hours}</Title>
      <span className={styles.colon}>:</span>
      <Title size={isMobile ? "middle" : "large"}>{minutes}</Title>
    </div>
  );
}

export default Clock;
