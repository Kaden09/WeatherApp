import styles from "./AdditionalInfoList.module.scss";
import { IAdditionalInfoList } from "./AdditionalInfoList.interface.ts";
import { useState, useEffect } from "react";
import { AdditionalInfo, SkeletonLoader } from "../../shared/ui/index.ts";
import { ADDITIONAL_INFO } from "./AdditionalInfo.const.ts";

function AdditionalInfoList({ forecast }: IAdditionalInfoList) {
  const [info, setInfo] =
    useState<{ item: string; value: number; units: string }[]>(ADDITIONAL_INFO);

  useEffect(() => {
    if (forecast) {
      const currentMonth = new Date(forecast[0].date).getMonth();
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
          item:
            currentMonth > 10 ||
            currentMonth < 2 ||
            forecast[0].hour[0].chance_of_snow > 0
              ? "Chance of Snow"
              : "Chance of Rain",
          value:
            currentMonth > 10 ||
            currentMonth < 2 ||
            forecast[0].hour[0].chance_of_snow > 0
              ? forecast[0].hour[0].chance_of_snow
              : forecast[0].hour[0].chance_of_rain,
          units: "%",
        },
      ]);
    }
  }, [forecast]);

  return (
    <div className={styles["additional-info-list"]}>
      {info.map((el, i) =>
        forecast ? (
          <AdditionalInfo
            key={i}
            item={el.item}
            value={el.value}
            units={el.units}
          />
        ) : (
          <div className={styles.loader}>
            <SkeletonLoader width={80} height={15} />
            <SkeletonLoader width={50} height={15} />
          </div>
        ),
      )}
    </div>
  );
}

export default AdditionalInfoList;
