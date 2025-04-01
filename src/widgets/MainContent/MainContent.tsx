import styles from "./MainContent.module.scss";
import { BigDegrees, WeatherIcon } from "../../shared/ui/index.ts";
import { AdditionalInfoList } from "../index.ts";
import { IMainContent } from "./MainContent.interface.ts";

function MainContent({ forecast }: IMainContent) {
  const currentTemp = forecast && forecast[0].hour[0].temp_c;
  const weatherCondition = forecast && forecast[0].hour[0].condition.text;

  return (
    <main className={styles["main-content"]}>
      <BigDegrees degrees={currentTemp ? Math.round(currentTemp) : 0} />
      <div className={styles.icon}>
        <WeatherIcon condition={weatherCondition || ""} isToday={true} />
      </div>
      <AdditionalInfoList forecast={forecast} />
    </main>
  );
}

export default MainContent;
