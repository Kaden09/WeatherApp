import styles from "./MainPage.module.scss";
import { WeatherCardsList, AstroTimes } from "../../widgets/index.ts";
import {
  Location,
  AdditionalInfo,
  RealTimeClock,
} from "../../shared/ui/index.ts";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Location />
      <RealTimeClock />

      <AdditionalInfo />
      <AstroTimes />
      <WeatherCardsList />
    </div>
  );
}

export default MainPage;
