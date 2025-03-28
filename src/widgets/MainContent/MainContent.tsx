import styles from "./MainContent.module.scss";
import {
  BigDegrees,
  WeatherIcon,
  SkeletonLoader,
} from "../../shared/ui/index.ts";
import { AdditionalInfoList } from "../index.ts";
import { IMainContent } from "./MainContent.interface.ts";

function MainContent({ forecast, isLoading }: IMainContent) {
  const maxTemp = forecast && forecast[0].day.maxtemp_c;
  const weatherCondition = forecast && forecast[0].day.condition.text;

  return (
    <main className={styles["main-content"]}>
      <BigDegrees
        degrees={maxTemp ? Math.round(maxTemp) : 0}
        isLoading={isLoading}
      />
      <div className={styles.icon}>
        {isLoading ? (
          <SkeletonLoader width={200} height={99} />
        ) : (
          <WeatherIcon condition={weatherCondition || ""} />
        )}
      </div>
      <AdditionalInfoList forecast={forecast} />
    </main>
  );
}

export default MainContent;
