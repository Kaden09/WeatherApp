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
  MistIcon,
  HeavySnowIcon,
  ModerateSnowIcon,
  LightSnowIcon,
  BarelySnowIcon,
} from "../../../assets/index.ts";
import { IWeatherIcon } from "./WeatherIcon.interface.ts";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../store/themeAtom.ts";
import {
  HEAVY_RAIN,
  MODERATE_RAIN,
  LIGHT_RAIN,
  DRIZZLE_RAIN,
  HEAVY_SNOW,
  MODERATE_SNOW,
  LIGHT_SNOW,
  BARELY_SNOW,
} from "./WeatherIcon.const.ts";
import { isLoadingAtom } from "../../store/weatherAtoms.ts";
import { SkeletonLoader } from "../index.ts";

function WeatherIcon({ condition = "", isToday = false }: IWeatherIcon) {
  const theme = useAtomValue(themeAtom);
  const lowCondition = condition.toLowerCase().trim();
  const isLoading = useAtomValue(isLoadingAtom);

  if (isLoading) {
    return <SkeletonLoader width={200} height={99} />;
  } else if (lowCondition === "sunny" || lowCondition === "clear") {
    return isToday && theme === "dark" ? <MoonIcon /> : <SunIcon />;
  } else if (lowCondition === "partly cloudy") {
    return isToday && theme === "dark" ? (
      <NightPartlyCloudyIcon />
    ) : (
      <PartlyCloudyIcon />
    );
  } else if (lowCondition === "mist") {
    return <MistIcon />;
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
    return isToday && theme === "dark" ? (
      <NightDrizzleRainIcon />
    ) : (
      <DrizzleRainIcon />
    );
  } else if (HEAVY_SNOW.includes(lowCondition)) {
    return <HeavySnowIcon />;
  } else if (MODERATE_SNOW.includes(lowCondition)) {
    return <ModerateSnowIcon />;
  } else if (LIGHT_SNOW.includes(lowCondition)) {
    return <LightSnowIcon />;
  } else if (BARELY_SNOW.includes(lowCondition)) {
    return <BarelySnowIcon />;
  } else if (condition.toLowerCase().includes("thunder")) {
    return <LightningIcon />;
  }
}

export default WeatherIcon;
