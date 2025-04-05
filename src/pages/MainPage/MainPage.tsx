import styles from "./MainPage.module.scss";
import {
  WeatherCardsList,
  AstroTimes,
  MainContent,
  MetaInfo,
} from "../../widgets/index.ts";
import { useWeather } from "../../features/weather/index.ts";
import { useSetAtom } from "jotai";
import { isLoadingAtom } from "../../shared/store/weatherAtoms.ts";
import { useEffect } from "react";

function MainPage() {
  const { data, isLoading } = useWeather();
  const setIsLoading = useSetAtom(isLoadingAtom);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return (
    <div className={styles.wrapper}>
      <MetaInfo location={data?.location} />
      <MainContent
        current={data?.current}
        forecast={data?.forecast.forecastday}
      />
      <AstroTimes astro={data?.forecast.forecastday[0].astro} />
      <WeatherCardsList forecast={data?.forecast.forecastday} />
    </div>
  );
}

export default MainPage;
