import styles from "./AdditionalInfoList.module.scss";
import { IAdditionalInfoList } from "./AdditionalInfoList.interface.ts";
import { useState, useEffect } from "react";
import { AdditionalInfo } from "../../shared/ui/index.ts";

function AdditionalInfoList({ data }: IAdditionalInfoList) {
  const [info, setInfo] = useState<
    { item: string; value: number; units: string }[]
  >([]);
  const forecast = data?.forecast.forecastday || [];

  useEffect(() => {
    if (data !== undefined) {
      setInfo([
        { item: "Wind", value: forecast[0].day.maxwind_kph, units: "km/h" },
        {
          item: "Precipitation",
          value: forecast[0].day.totalprecip_mm,
          units: "mm",
        },
        { item: "Humidity", value: forecast[0].day.avghumidity, units: "%" },
        { item: "Clouds", value: forecast[0].hour[0].cloud, units: "%" },
        {
          item: "Chance of Rain",
          value: forecast[0].hour[0].chance_of_rain,
          units: "%",
        },
      ]);
    }
  }, [data]);

  return (
    <div className={styles["additional-info-list"]}>
      {info.map((el, i) => (
        <AdditionalInfo
          key={i}
          item={el.item}
          value={el.value}
          units={el.units}
        />
      ))}
    </div>
  );
}

export default AdditionalInfoList;
