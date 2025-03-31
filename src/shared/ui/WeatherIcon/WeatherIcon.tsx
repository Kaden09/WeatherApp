import {
  PartlyCloudyIcon,
  SunIcon,
  CloudIcon,
  HeavyRainIcon,
  ModerateRainIcon,
  LightRainIcon,
  DrizzleRainIcon,
  LightningIcon,
  NightCloudIcon,
} from "../../../assets/index.ts";
import { IWeatherIcon } from "./WeatherIcon.interface.ts";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../store/themeAtom.ts";
import {
  HEAVY_RAIN,
  MODERATE_RAIN,
  LIGHT_RAIN,
  DRIZZLE_RAIN,
} from "./WeatherIcon.const.ts";

function WeatherIcon({ condition }: IWeatherIcon) {
  const theme = useAtomValue(themeAtom);
  const lowCondition = condition.toLowerCase().trim();
  alert(lowCondition);
  if (condition.toLowerCase().includes("sun")) {
    return <SunIcon />;
  } else if (condition.toLowerCase().trim() === "partly cloudy") {
    return <PartlyCloudyIcon />;
  } else if (condition.toLowerCase().trim() === "cloudy") {
    return theme === "dark" ? <NightCloudIcon /> : <CloudIcon />;
  } else if (HEAVY_RAIN.includes(lowCondition)) {
    return <HeavyRainIcon />;
  } else if (MODERATE_RAIN.includes(lowCondition)) {
    return <ModerateRainIcon />;
  } else if (LIGHT_RAIN.includes(lowCondition)) {
    return <LightRainIcon />;
  } else if (DRIZZLE_RAIN.includes(lowCondition)) {
    return <DrizzleRainIcon />;
  } else if (condition.toLowerCase().includes("thunder")) {
    return <LightningIcon />;
  }
}

export default WeatherIcon;
