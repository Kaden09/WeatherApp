import styles from "./MetaInfo.module.scss";
import { Location, RealTimeClock } from "../../shared/ui/index.ts";
import { IMetaInfo } from "./MetaInfo.interface.ts";
import { Searchbar } from "../index.ts";

function MetaInfo({ data, isLoading }: IMetaInfo) {
  return (
    <div className={styles["meta-info"]}>
      <Location className={styles.location} isLoading={isLoading} />
      <Searchbar />
      <RealTimeClock
        data={data}
        isLoading={isLoading}
        className={styles.clock}
      />
    </div>
  );
}

export default MetaInfo;
