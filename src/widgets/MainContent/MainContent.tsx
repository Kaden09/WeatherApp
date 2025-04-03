import styles from "./MainContent.module.scss";
import { BigDegrees, WeatherIcon } from "../../shared/ui/index.ts";
import { AdditionalInfoList } from "../index.ts";
import { IMainContent } from "./MainContent.interface.ts";

function MainContent({ current, forecast }: IMainContent) {
  const currentTemp = current && current.temp_c;
  const weatherCondition = current && current.condition.text;

  return (
    <main className={styles["main-content"]}>
      <BigDegrees degrees={currentTemp ? Math.round(currentTemp) : 0} />
      <div className={styles.icon}>
        <WeatherIcon condition={weatherCondition} isToday={true} />
      </div>
      <AdditionalInfoList current={current} forecast={forecast} />
    </main>
  );
}

export default MainContent;
