import styles from "./MetaInfo.module.scss";
import { Location, RealTimeClock } from "../../shared/ui/index.ts";
import { IMetaInfo } from "./MetaInfo.interface.ts";
import { Searchbar } from "../index.ts";
import { useMediaQuery } from "react-responsive";

function MetaInfo({location}: IMetaInfo) {
  const isMobile = useMediaQuery({ maxWidth: 400 });

  if (isMobile) {
    return (
      <div className={styles["mobile-meta-info"]}>
        <Searchbar />
        <div className={styles["meta-data"]}>
          <Location className={styles.location} />
          <RealTimeClock location={location} className={styles.clock} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles["meta-info"]}>
      <Location className={styles.location} />
      <Searchbar />
      <RealTimeClock location={location} className={styles.clock} />
    </div>
  );
}

export default MetaInfo;
