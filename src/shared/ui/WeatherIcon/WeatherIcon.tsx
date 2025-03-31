import {
  PartlyCloudyIcon,
  SunIcon,
  CloudIcon,
  RainIcon,
  LightningIcon,
  NightIcon,
} from "../../../assets/index.ts";
import { IWeatherIcon } from "./WeatherIcon.interface.ts";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../store/themeAtom.ts";

function WeatherIcon({ condition }: IWeatherIcon) {
  const theme = useAtomValue(themeAtom);
  if (condition.toLowerCase().includes("sun")) {
    return <SunIcon />;
  } else if (condition.toLowerCase().trim() === "partly cloudy") {
    return <PartlyCloudyIcon />;
  } else if (condition.toLowerCase().trim() === "cloudy") {
    return theme === "dark" ? <NightIcon /> : <CloudIcon />;
  } else if (condition.toLowerCase().includes("rain")) {
    return <RainIcon />;
  } else if (condition.toLowerCase().includes("thunder")) {
    return <LightningIcon />;
  }
}

export default WeatherIcon;
