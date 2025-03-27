import styles from "./MainContent.module.scss";
import { BigDegrees, WeatherIcon } from "../../shared/ui/index.ts";
import { AdditionalInfoList } from "../index.ts";
import { IMainContent } from "./MainContent.interface.ts";

function MainContent({ data }: IMainContent) {
  if (data !== undefined)
    return (
      <main className={styles["main-content"]}>
        <BigDegrees data={data}
          degrees={Math.round(data.forecast.forecastday[0].day.maxtemp_c)}
        />
        <div className={styles.icon}>
          <WeatherIcon
            condition={data.forecast.forecastday[0].day.condition.text}
          />
        </div>
        <AdditionalInfoList data={data} />
      </main>
    );
}

export default MainContent;
