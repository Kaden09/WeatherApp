import styles from "./MetaInfo.module.scss";
import { Location, RealTimeClock } from "../../shared/ui/index.ts";

function MetaInfo() {
  return (
    <div className={styles["meta-info"]}>
      <Location />
      <RealTimeClock />
    </div>
  );
}

export default MetaInfo;
