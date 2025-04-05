import styles from "./AdditionalInfoList.module.scss";
import { IAdditionalInfoList } from "./AdditionalInfoList.interface.ts";
import { useState, useEffect } from "react";
import { AdditionalInfo, SkeletonLoader } from "../../shared/ui/index.ts";
import { ADDITIONAL_INFO } from "./AdditionalInfo.const.ts";
import { useMediaQuery } from "react-responsive";
import {
  getPrecipChanceType,
  getPrecipChanceValue,
} from "./AdditionalInfoList.utils.ts";

function AdditionalInfoList({ current, forecast }: IAdditionalInfoList) {
  const [info, setInfo] =
    useState<{ item: string; value: number | string; units?: string }[]>(
      ADDITIONAL_INFO,
    );
  const isMobile = useMediaQuery({ maxWidth: 400 });

  useEffect(() => {
    if (current && forecast) {
      const currentMonth = new Date(current.date).getMonth();

      const mobileItems = [
        { item: "Condition", value: current.condition.text },
        { item: "Wind", value: current.wind_kph, units: "km/h" },
        { item: "Clouds", value: current.cloud, units: "%" },
        {
          item: getPrecipChanceType(currentMonth, forecast),
          value: getPrecipChanceValue(currentMonth, forecast),
          units: "%",
        },
      ];

      const desctopItems = [
        ...mobileItems,
        {
          item: "Precipitation",
          value: current.precip_mm,
          units: "mm",
        },
        { item: "Humidity", value: current.humidity, units: "%" },
      ];

      setInfo(isMobile ? mobileItems : desctopItems);
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
