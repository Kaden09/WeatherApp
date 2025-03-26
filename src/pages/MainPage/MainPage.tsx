import styles from "./MainPage.module.scss";
import {
  WeatherCardsList,
  AstroTimes,
  AdditionalInfoList,
  MainContent,
} from "../../widgets/index.ts";
import { Location, RealTimeClock, BigDegrees } from "../../shared/ui/index.ts";
import { useWeather } from "../../features/weather/index.ts";

function MainPage() {
  const { data } = useWeather();
  if (data !== undefined)
    return (
      <div className={styles.wrapper}>
        <Location />
        <RealTimeClock />
        <MainContent data={data} />
        <AstroTimes />
        <WeatherCardsList />
      </div>
    );
}

export default MainPage;
