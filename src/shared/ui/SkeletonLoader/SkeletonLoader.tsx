import styles from "./SkeletonLoader.module.scss";
import { ISkeletonLoader } from "./SkeletonLoader.interface.ts";

function SkeletonLoader({ width, height }: ISkeletonLoader) {
  return (
    <div
      className={styles.loader}
      style={
        {
          "--loader-width": `${width}px`,
          "--loader-height": `${height}px`,
        } as React.CSSProperties
      }
    >
      <div className={styles.shadow}></div>
    </div>
  );
}

export default SkeletonLoader;
