import { Title } from "../index.ts";
import { useWeather } from "../../../features/weather/index.ts";
import styles from "./AdditionalInfo.module.scss";

function AdditionalInfo() {
  const { data } = useWeather();
  const forecast = (data !== undefined && data.forecast.forecastday) || [];

  if (data !== undefined)
    return (
      <div className={styles["additional-info"]}>
        <Title size="small" color="secondary">
          Wind:
        </Title>
        <Title size="small">{forecast[0].day.maxwind_kph} km/h</Title>
      </div>
    );
}

export default AdditionalInfo;
