import styles from "./MainPage.module.scss";
import {
  WeatherCardsList,
  AstroTimes,
  MainContent,
  MetaInfo,
} from "../../widgets/index.ts";
import { useWeather } from "../../features/weather/index.ts";

function MainPage() {
  const { data, isLoading } = useWeather();
  return (
    <div className={styles.wrapper}>
      <MetaInfo data={data?.location} isLoading={isLoading} />
      <MainContent data={data} isLoading={isLoading} />
      <AstroTimes
        data={data?.forecast.forecastday[0].astro}
        isLoading={isLoading}
      />
      <WeatherCardsList
        location={data?.location}
        forecast={data?.forecast.forecastday}
        isLoading={isLoading}
      />
    </div>
  );
}

export default MainPage;
