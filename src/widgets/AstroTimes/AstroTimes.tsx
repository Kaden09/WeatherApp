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
import { isLoadingAtom } from "../../shared/store/weatherAtoms.ts";
import { useMediaQuery } from "react-responsive";

function AstroTimes({ astro }: IAstroTimes) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const time = useAtomValue(timeAtom);
  const isLoading = useAtomValue(isLoadingAtom);
  const setTheme = useSetAtom(themeAtom);
  const isMobile = useMediaQuery({ maxWidth: 400 });

  useEffect(() => {
    if (astro) {
      let diff = getDifference(astro);
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
            <SkeletonLoader
              width={isMobile ? 16 : 26}
              height={isMobile ? 16 : 26}
            />
          ) : (
            <SunriseIcon />
          )
        }
      >
        {isLoading ? (
          <SkeletonLoader
            width={isMobile ? 50 : 70}
            height={isMobile ? 16 : 26}
          />
        ) : (
          <Title size="middle" className={styles.sunrise}>
            {astro?.sunrise}
          </Title>
        )}
      </IconWithText>
      <div className={styles["dotted-line"]}></div>

      <Title size="middle" color="secondary" className={styles.difference}>
        {isLoading ? (
          <SkeletonLoader
            width={isMobile ? 60 : 90}
            height={isMobile ? 16 : 26}
          />
        ) : (
          `${Math.floor(hours)} h ${Math.floor(minutes)} m`
        )}
      </Title>

      <div className={styles["dotted-line"]}></div>
      <IconWithText
        icon={
          isLoading ? (
            <SkeletonLoader
              width={isMobile ? 16 : 26}
              height={isMobile ? 16 : 26}
            />
          ) : (
            <SunsetIcon />
          )
        }
      >
        {isLoading ? (
          <SkeletonLoader
            width={isMobile ? 50 : 70}
            height={isMobile ? 16 : 26}
          />
        ) : (
          <Title size="middle" className={styles.sunset}>
            {astro?.sunset}
          </Title>
        )}
      </IconWithText>
    </div>
  );
}

export default AstroTimes;
