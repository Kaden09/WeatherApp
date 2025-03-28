import styles from "./MainContent.module.scss";
import {
  BigDegrees,
  WeatherIcon,
  SkeletonLoader,
} from "../../shared/ui/index.ts";
import { AdditionalInfoList } from "../index.ts";
import { IMainContent } from "./MainContent.interface.ts";

function MainContent({ data, isLoading }: IMainContent) {
  return (
    <main className={styles["main-content"]}>
      <BigDegrees
        degrees={
          data !== undefined
            ? Math.round(data?.forecast.forecastday[0].day.maxtemp_c)
            : 0
        }
        isLoading={isLoading}
      />
      <div className={styles.icon}>
        {isLoading ? (
          <SkeletonLoader width={200} height={99} />
        ) : (
          <WeatherIcon
            condition={data?.forecast.forecastday[0].day.condition.text || ""}
          />
        )}
      </div>
      <AdditionalInfoList
        forecast={data?.forecast.forecastday}
        isLoading={isLoading}
      />
    </main>
  );
}

export default MainContent;
