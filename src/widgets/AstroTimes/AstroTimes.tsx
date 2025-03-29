import styles from "./AstroTimes.module.scss";
import { IconWithText, Title, SkeletonLoader } from "../../shared/ui/index.ts";
import { SunriseIcon, SunsetIcon } from "../../assets/index.ts";
import { useEffect, useState } from "react";
import { IAstroTimes } from "./AstroTimes.interface.ts";
import { useSetAtom, useAtomValue } from "jotai";
import { timeAtom } from "../../shared/store/timeAtom.ts";
import { themeAtom } from "../../shared/store/themeAtom.ts";
import {
  convertTime,
  getDifference,
  compareTimes,
} from "./AstroTimes.utils.ts";

function AstroTimes({ astro, isLoading }: IAstroTimes) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const time = useAtomValue(timeAtom);
  const setTheme = useSetAtom(themeAtom);

  useEffect(() => {
    if (astro) {
      let diff = getDifference(astro);
      if (diff) {
        setHours(diff / (1000 * 60 * 60));
        setMinutes((diff % (1000 * 60 * 60)) / (1000 * 60));
      }
      if (
        compareTimes(convertTime(astro.sunrise), time, true) ||
        compareTimes(convertTime(astro.sunset), time, false)
      ) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
  }, [astro]);

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
          <Title size="middle">{astro?.sunrise}</Title>
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
          <Title size="middle">{astro?.sunset}</Title>
        )}
      </IconWithText>
    </div>
  );
}

export default AstroTimes;
