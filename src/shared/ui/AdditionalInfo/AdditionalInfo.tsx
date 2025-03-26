import { Title } from "../index.ts";
import { useWeather } from "../../../features/weather/index.ts";
import styles from "./AdditionalInfo.module.scss";
import { IAdditionalInfo } from "./AdditionalInfo.interface.ts";

function AdditionalInfo({ item, value, units }: IAdditionalInfo) {
  const { data } = useWeather();
  const forecast = (data !== undefined && data.forecast.forecastday) || [];

  if (data !== undefined)
    return (
      <div className={styles["additional-info"]}>
        <Title size="small" color="secondary">
          {item}:
        </Title>
        <Title size="small">{value} {units}</Title>
      </div>
    );
}

export default AdditionalInfo;
