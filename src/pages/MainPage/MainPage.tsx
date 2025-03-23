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
import { WeatherCard } from "../../widgets/index.ts";

function MainPage() {
  return (
    <div>
      <CloudIcon />
      <LightningIcon />
      <RainIcon />
      <NightIcon />
      <SunIcon />
      <LocationIcon />
      <ClockIcon />
      <SunsetIcon />
      <SunriseIcon />
      <WeatherCard
        weekDay={0}
        date={23}
        month={3}
        dayDegrees={23}
        nightDegrees={10}
        weather={<NightIcon />}
      />
    </div>
  );
}

export default MainPage;
