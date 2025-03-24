import styles from "./MainPage.module.scss";
import {
  CloudIcon,
  LightningIcon,
  RainIcon,
  NightIcon,
  SunIcon,
  LocationIcon,
  ClockIcon,
  SunsetIcon,
  SunriseIcon,
} from "../../assets/index.ts";
import { WeatherCard, WeatherCardsList } from "../../widgets/index.ts";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <WeatherCardsList />
    </div>
  );
}

export default MainPage;
