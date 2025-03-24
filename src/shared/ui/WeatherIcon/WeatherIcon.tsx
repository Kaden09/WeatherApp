import {
  SunIcon,
  CloudIcon,
  RainIcon,
  NightIcon,
  LightningIcon,
} from "../../../assets/index.ts";
import { IWeatherIcon } from "./WeatherIcon.interface.ts";

function WeatherIcon({ condition }: IWeatherIcon) {
  if (condition.toLowerCase().includes("sun")) {
    return <SunIcon />;
  } else if (condition.toLowerCase().includes("cloud")) {
    return <CloudIcon />;
  } else if (condition.toLowerCase().includes("rain")) {
    return <RainIcon />;
  } else if (condition.toLowerCase().includes("thunder")) {
    return <LightningIcon />;
  }
}

export default WeatherIcon;
