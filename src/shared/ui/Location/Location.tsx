import { Title, IconWithText, SkeletonLoader } from "../index.ts";
import { LocationIcon } from "../../../assets/index.ts";
import { cityAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";
import styles from "./Location.module.scss";
import { ILocation } from "./Location.interface.ts";
import cx from "classix";

function Location({ isLoading, className }: ILocation) {
  const city = useAtomValue(cityAtom);
  const cls = cx(styles.location, className);

  return (
    <IconWithText
      icon={
        isLoading ? <SkeletonLoader width={26} height={26} /> : <LocationIcon />
      }
      className={cls}
    >
      {isLoading ? (
        <SkeletonLoader width={130} height={26} />
      ) : (
        <Title size="large" className={styles["city-name"]}>
          {city}
        </Title>
      )}
    </IconWithText>
  );
}
export default Location;
