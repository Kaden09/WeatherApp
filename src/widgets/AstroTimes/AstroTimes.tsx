import styles from "./AstroTimes.module.scss";
import { IconWithText, Title } from "../../shared/ui/index.ts";
import { SunriseIcon, SunsetIcon } from "../../assets/index.ts";
import { useWeather } from "../../features/weather/index.ts";
import { useEffect, useState } from "react";

function AstroTimes() {
  const { data } = useWeather();
  const forecast = data?.forecast.forecastday || [];
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
    let sunset = new Date(
      `2000-01-01T${convertTime(forecast[0].astro.sunset)}`,
    );
    let sunrise = new Date(
      `2000-01-01T${convertTime(forecast[0].astro.sunrise)}`,
    );
    return sunset.getTime() - sunrise.getTime();
  }

  useEffect(() => {
    if (data !== undefined) {
      let diff = getDifference();
      setHours(diff / (1000 * 60 * 60));
      setMinutes((diff % (1000 * 60 * 60)) / (1000 * 60));
    }
  }, [data]);

  if (data !== undefined)
    return (
      <div className={styles["astro-times"]}>
        <IconWithText icon={<SunriseIcon />}>
          <Title size="middle">{forecast[0].astro.sunrise}</Title>
        </IconWithText>
        <div className={styles["dotted-line"]}></div>
        <Title size="middle" color="secondary">
          {Math.floor(hours)} h {Math.floor(minutes)} m
        </Title>
        <div className={styles["dotted-line"]}></div>
        <IconWithText icon={<SunsetIcon />}>
          <Title size="middle">{forecast[0].astro.sunset}</Title>
        </IconWithText>
      </div>
    );
}

export default AstroTimes;
