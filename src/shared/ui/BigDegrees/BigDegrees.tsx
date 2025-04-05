import styles from "./BigDegrees.module.scss";
import { IBigDegrees } from "./BigDegrees.interface.ts";
import { Title } from "../index.ts";
import { SkeletonLoader } from "../index.ts";
import { isLoadingAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";
import { useMediaQuery } from "react-responsive";

function BigDegrees({ degrees }: IBigDegrees) {
  const isLoading = useAtomValue(isLoadingAtom);
  const isMobile = useMediaQuery({ maxWidth: 400 });

  return (
    <>
      {isLoading ? (
        <div className={styles["big-degrees"]}>
          <SkeletonLoader
            width={isMobile ? 50 : 110}
            height={isMobile ? 60 : 99}
          />
          <SkeletonLoader
            width={isMobile ? 35 : 62}
            height={isMobile ? 30 : 50}
          />
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
