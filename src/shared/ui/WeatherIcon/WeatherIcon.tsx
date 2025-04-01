import {
  PartlyCloudyIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
  HeavyRainIcon,
  ModerateRainIcon,
  LightRainIcon,
  DrizzleRainIcon,
  LightningIcon,
  NightPartlyCloudyIcon,
  NightCloudyIcon,
  NightHeavyRainIcon,
  NightModerateRainIcon,
  NightLightRainIcon,
  NightDrizzleRainIcon,
  OvercastIcon,
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

function WeatherIcon({ condition, isToday }: IWeatherIcon) {
  const theme = useAtomValue(themeAtom);
  const lowCondition = condition.toLowerCase().trim();
  if (lowCondition === "sunny" || lowCondition === "clear") {
    return isToday && theme === "dark" ? <MoonIcon /> : <SunIcon />;
  } else if (lowCondition === "partly cloudy") {
    return isToday && theme === "dark" ? (
      <NightPartlyCloudyIcon />
    ) : (
      <PartlyCloudyIcon />
    );
  } else if (lowCondition === "overcast") {
    return <OvercastIcon />;
  } else if (lowCondition === "cloudy") {
    return isToday && theme === "dark" ? <NightCloudyIcon /> : <CloudIcon />;
  } else if (HEAVY_RAIN.includes(lowCondition)) {
    return isToday && theme === "dark" ? (
      <NightHeavyRainIcon />
    ) : (
      <HeavyRainIcon />
    );
  } else if (MODERATE_RAIN.includes(lowCondition)) {
    return isToday && theme === "dark" ? (
      <NightModerateRainIcon />
    ) : (
      <ModerateRainIcon />
    );
  } else if (LIGHT_RAIN.includes(lowCondition)) {
    return isToday && theme === "dark" ? (
      <NightLightRainIcon />
    ) : (
      <LightRainIcon />
    );
  } else if (DRIZZLE_RAIN.includes(lowCondition)) {
    return isToday ? <NightDrizzleRainIcon /> : <DrizzleRainIcon />;
  } else if (condition.toLowerCase().includes("thunder")) {
    return <LightningIcon />;
  }
}

export default WeatherIcon;
