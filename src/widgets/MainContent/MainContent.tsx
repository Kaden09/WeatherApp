import styles from "./MainContent.module.scss";
import { BigDegrees, WeatherIcon } from "../../shared/ui/index.ts";
import { AdditionalInfoList } from "../index.ts";
import { IMainContent } from "./MainContent.interface.ts";

function MainContent({ data }: IMainContent) {
  if (data !== undefined)
    return (
      <div className={styles["main-content"]}>
        <BigDegrees
          degrees={Math.round(data.forecast.forecastday[0].day.maxtemp_c)}
        />
        <div className={styles.icon}>
          <WeatherIcon
            condition={data.forecast.forecastday[0].day.condition.text}
          />
        </div>
        <AdditionalInfoList data={data} />
      </div>
    );
}

export default MainContent;
