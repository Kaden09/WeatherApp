import styles from "./BigDegrees.module.scss";
import { IBigDegrees } from "./BigDegrees.interface.ts";
import { Title } from "../index.ts";
import { SkeletonLoader } from "../index.ts";

function BigDegrees({ degrees, isLoading }: IBigDegrees) {
  return (
    <>
      {isLoading ? (
        <div className={styles["big-degrees"]}>
          <SkeletonLoader width={110} height={99} />
          <SkeletonLoader width={62} height={50} />
        </div>
      ) : (
        <div className={styles["big-degrees"]}>
          <Title className={styles.degrees}>{degrees}</Title>
          <Title className={styles.celsius}>°C</Title>
        </div>
      )}
    </>
  );
}

export default BigDegrees;
