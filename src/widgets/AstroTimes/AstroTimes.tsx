import styles from "./AstroTimes.module.scss";
import { IconWithText, Title, SkeletonLoader } from "../../shared/ui/index.ts";
import {
  SunriseIcon,
  SunsetIcon,
  MoonriseIcon,
  MoonsetIcon,
} from "../../assets/index.ts";
import { useEffect, useState } from "react";
import { IAstroTimes } from "./AstroTimes.interface.ts";
import { useAtom, useAtomValue } from "jotai";
import { timeAtom } from "../../shared/store/timeAtom.ts";
import { themeAtom } from "../../shared/store/themeAtom.ts";
import {
  convertTime,
  getDifference,
  compareTimes,
} from "./AstroTimes.utils.ts";
import { isLoadingAtom } from "../../shared/store/weatherAtoms.ts";

function AstroTimes({ astro }: IAstroTimes) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const time = useAtomValue(timeAtom);
  const isLoading = useAtomValue(isLoadingAtom);
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (astro) {
      let diff = getDifference(astro, theme);
      if (diff) {
        setHours(diff / (1000 * 60 * 60));
        setMinutes((diff % (1000 * 60 * 60)) / (1000 * 60));
      }
      if (
        compareTimes(convertTime(astro.sunrise), convertTime(time), true) &&
        compareTimes(convertTime(astro.sunset), convertTime(time), false)
      ) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
  }, [astro, time]);

  return (
    <div className={styles["astro-times"]}>
      <IconWithText
        icon={
          isLoading ? (
            <SkeletonLoader width={26} height={26} />
          ) : theme === "dark" ? (
            <MoonriseIcon />
          ) : (
            <SunriseIcon />
          )
        }
      >
        {isLoading ? (
          <SkeletonLoader width={90} height={26} />
        ) : (
          <Title size="middle" className={styles.sunrise}>
            {theme === "dark" ? astro?.moonrise : astro?.sunrise}
          </Title>
        )}
      </IconWithText>
      <div className={styles["dotted-line"]}></div>

      <Title size="middle" color="secondary" className={styles.difference}>
        {isLoading ? (
          <SkeletonLoader width={90} height={26} />
        ) : (
          `${Math.floor(hours)} h ${Math.floor(minutes)} m`
        )}
      </Title>

      <div className={styles["dotted-line"]}></div>
      <IconWithText
        icon={
          isLoading ? (
            <SkeletonLoader width={26} height={26} />
          ) : theme === "dark" ? (
            <MoonsetIcon />
          ) : (
            <SunsetIcon />
          )
        }
      >
        {isLoading ? (
          <SkeletonLoader width={70} height={26} />
        ) : (
          <Title size="middle" className={styles.sunset}>
            {theme === "dark" ? astro?.moonset : astro?.sunset}
          </Title>
        )}
      </IconWithText>
    </div>
  );
}

export default AstroTimes;
