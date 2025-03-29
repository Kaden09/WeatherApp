import styles from "./AstroTimes.module.scss";
import { IconWithText, Title, SkeletonLoader } from "../../shared/ui/index.ts";
import { SunriseIcon, SunsetIcon } from "../../assets/index.ts";
import { useEffect, useState } from "react";
import { IAstroTimes } from "./AstroTimes.interface.ts";
import { useSetAtom, useAtomValue } from "jotai";
import { timeAtom } from "../../shared/store/timeAtom.ts";
import { themeAtom } from "../../shared/store/themeAtom.ts";

function AstroTimes({ data, isLoading }: IAstroTimes) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const time = useAtomValue(timeAtom);
  const setTheme = useSetAtom(themeAtom);

  function convertTime(time12h: string) {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = modifier === "AM" ? "00" : "12";
    } else if (modifier === "PM") {
      hours = String(parseInt(hours, 10) + 12);
    }

    return `${hours}:${minutes}`;
  }

  function getDifference() {
    if (data) {
      let sunset = new Date(`2000-01-01T${convertTime(data.sunset)}`);
      let sunrise = new Date(`2000-01-01T${convertTime(data.sunrise)}`);
      return sunset.getTime() - sunrise.getTime();
    }
  }

  function compareTimes(time1: string, time2: string, less: boolean) {
    const [hours1, minutes1] = time1.split(":").map(Number);
    const [hours2, minutes2] = time2.split(":").map(Number);

    const date1 = new Date().setHours(hours1, minutes1, 0, 0);
    const date2 = new Date().setHours(hours2, minutes2, 0, 0);

    return less ? date1 < date2 : date1 > date2;
  }

  useEffect(() => {
    if (data) {
      let diff = getDifference();
      if (
        compareTimes(convertTime(data.sunrise), time, true) ||
        compareTimes(convertTime(data.sunset), time, false)
      ) {
        setTheme("light");
      } else {
        setTheme("dark");
      }

      if (diff) {
        setHours(diff / (1000 * 60 * 60));
        setMinutes((diff % (1000 * 60 * 60)) / (1000 * 60));
      }
    }
  }, [data]);

  return (
    <div className={styles["astro-times"]}>
      <IconWithText
        icon={
          isLoading ? (
            <SkeletonLoader width={26} height={26} />
          ) : (
            <SunriseIcon />
          )
        }
      >
        {isLoading ? (
          <SkeletonLoader width={90} height={26} />
        ) : (
          <Title size="middle">{data?.sunrise}</Title>
        )}
      </IconWithText>
      <div className={styles["dotted-line"]}></div>

      <Title size="middle" color="secondary">
        {isLoading ? (
          <SkeletonLoader width={90} height={26} />
        ) : (
          `${Math.floor(hours)} h ${Math.floor(minutes)} m`
        )}
      </Title>

      <div className={styles["dotted-line"]}></div>
      <IconWithText
        icon={
          isLoading ? <SkeletonLoader width={26} height={26} /> : <SunsetIcon />
        }
      >
        {isLoading ? (
          <SkeletonLoader width={70} height={26} />
        ) : (
          <Title size="middle">{data?.sunset}</Title>
        )}
      </IconWithText>
    </div>
  );
}

export default AstroTimes;
