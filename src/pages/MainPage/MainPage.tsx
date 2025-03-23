import styles from "./MainPage.module.scss";
import {
  CloudIcon,
  LightningIcon,
  RainIcon,
  NightIcon,
  SunIcon,
} from "../../assets/index.ts";

function MainPage() {
  return (
    <div>
      <CloudIcon />
      <LightningIcon />
      <RainIcon />
      <NightIcon />
      <SunIcon />
    </div>
  );
}

export default MainPage;
