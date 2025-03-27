import styles from "./BigDegrees.module.scss";
import { IBigDegrees } from "./BigDegrees.interface.ts";
import { Title, AdditionalInfo } from "../index.ts";

function BigDegrees({ degrees }: IBigDegrees) {
  return (
    <div className={styles["big-degrees"]}>
        <Title className={styles.degrees}>{degrees}</Title>
        <Title className={styles.celsius}>°C</Title>
    </div>
  );
}

export default BigDegrees;
