import styles from "./AstroTimes.module.scss";
import { IconWithText, Title, SkeletonLoader } from "../../shared/ui/index.ts";
import { SunriseIcon, SunsetIcon } from "../../assets/index.ts";
import { useEffect, useState } from "react";
import { IAstroTimes } from "./AstroTimes.interface.ts";

function AstroTimes({ data, isLoading }: IAstroTimes) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

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
    if (data !== undefined) {
      let sunset = new Date(`2000-01-01T${convertTime(data.sunset)}`);
      let sunrise = new Date(`2000-01-01T${convertTime(data.sunrise)}`);
      return sunset.getTime() - sunrise.getTime();
    }
  }

  useEffect(() => {
    if (data !== undefined) {
      let diff = getDifference();
      if (diff !== undefined) {
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
