import styles from "./BigDegrees.module.scss";
import { IBigDegrees } from "./BigDegrees.interface.ts";
import { Title } from "../index.ts";
import { SkeletonLoader } from "../index.ts";
import { isLoadingAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";

function BigDegrees({ degrees }: IBigDegrees) {
  const isLoading = useAtomValue(isLoadingAtom);

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
