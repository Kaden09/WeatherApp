import styles from "./MainContent.module.scss";
import {
  BigDegrees,
  WeatherIcon,
  SkeletonLoader,
} from "../../shared/ui/index.ts";
import { AdditionalInfoList } from "../index.ts";
import { IMainContent } from "./MainContent.interface.ts";

function MainContent({ forecast }: IMainContent) {
  const maxTemp = forecast && forecast[0].day.maxtemp_c;
  const weatherCondition = forecast && forecast[0].day.condition.text;

  return (
    <main className={styles["main-content"]}>
      <BigDegrees degrees={maxTemp ? Math.round(maxTemp) : 0} />
      <div className={styles.icon}>
        <WeatherIcon condition={weatherCondition || ""} isToday={true} />
      </div>
      <AdditionalInfoList forecast={forecast} />
    </main>
  );
}

export default MainContent;
