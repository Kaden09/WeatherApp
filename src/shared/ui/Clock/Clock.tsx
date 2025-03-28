import styles from "./Clock.module.scss";
import { useState, useEffect, useMemo } from "react";
import { Title } from "../index.ts";
import { IClock } from "./Clock.interface.ts";

function Clock({ data }: IClock) {
  const [time, setTime] = useState<string>("00:00");

  const timeZone = useMemo(() => data?.tz_id, [data]);

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
      <Title size="large">{hours}</Title>
      <span className={styles.colon}>:</span>
      <Title size="large">{minutes}</Title>
    </div>
  );
}

export default Clock;
