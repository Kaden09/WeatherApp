import styles from "./AdditionalInfoList.module.scss";
import { IAdditionalInfoList } from "./AdditionalInfoList.interface.ts";
import { useState, useEffect } from "react";
import { AdditionalInfo, SkeletonLoader } from "../../shared/ui/index.ts";
import { ADDITIONAL_INFO } from "./AdditionalInfo.const.ts";

function AdditionalInfoList({ current, forecast }: IAdditionalInfoList) {
  const [info, setInfo] =
    useState<{ item: string; value: number; units: string }[]>(ADDITIONAL_INFO);

  useEffect(() => {
    if (current && forecast) {
      const currentMonth = new Date(current.date).getMonth();
      setInfo([
        { item: "Wind", value: current.wind_kph, units: "km/h" },
        {
          item: "Precipitation",
          value: current.precip_mm,
          units: "mm",
        },
        { item: "Humidity", value: current.humidity, units: "%" },
        { item: "Clouds", value: current.cloud, units: "%" },
        {
          item:
            currentMonth > 10 ||
            currentMonth < 2 ||
            forecast[0].day.daily_chance_of_snow > 0
              ? "Chance of Snow"
              : "Chance of Rain",
          value:
            currentMonth > 10 ||
            currentMonth < 2 ||
            forecast[0].day.daily_chance_of_snow > 0
              ? forecast[0].day.daily_chance_of_snow
              : forecast[0].day.daily_chance_of_rain,
          units: "%",
        },
      ]);
    }
  }, [forecast, current]);

  if (!forecast || !current) {
    return (
      <div className={styles["additional-info-list"]}>
        {info.map((_) => (
          <div className={styles.loader}>
            <SkeletonLoader width={80} height={15} />
            <SkeletonLoader width={50} height={15} />
          </div>
        ))}
      </div>
    );
  }

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
