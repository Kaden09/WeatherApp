import styles from "./MainPage.module.scss";
import {
  WeatherCardsList,
  AstroTimes,
  AdditionalInfoList,
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
        <BigDegrees degrees={19} />
        <AdditionalInfoList data={data} />
        <AstroTimes />
        <WeatherCardsList />
      </div>
    );
}

export default MainPage;
