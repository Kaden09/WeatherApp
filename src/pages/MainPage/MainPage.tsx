import styles from "./MainPage.module.scss";
import {
  WeatherCardsList,
  AstroTimes,
  MainContent,
  MetaInfo,
} from "../../widgets/index.ts";
import { useWeather } from "../../features/weather/index.ts";

function MainPage() {
  const { data } = useWeather();
  if (data !== undefined)
    return (
      <div className={styles.wrapper}>
        <MetaInfo />
        <MainContent data={data} />
        <AstroTimes />
        <WeatherCardsList />
      </div>
    );
}

export default MainPage;
