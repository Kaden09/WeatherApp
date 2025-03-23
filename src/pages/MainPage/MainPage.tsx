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
import { Text } from "../../shared/ui/index.ts";

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
      <Text size="extra-large">Some text</Text>
    </div>
  );
}

export default MainPage;
