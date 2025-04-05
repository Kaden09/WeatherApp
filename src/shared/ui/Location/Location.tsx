import { Title, IconWithText, SkeletonLoader } from "../index.ts";
import { LocationIcon } from "../../../assets/index.ts";
import { cityAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";
import styles from "./Location.module.scss";
import { ILocation } from "./Location.interface.ts";
import cx from "classix";
import { isLoadingAtom } from "../../store/weatherAtoms.ts";
import { useMediaQuery } from "react-responsive";

function Location({ className }: ILocation) {
  const city = useAtomValue(cityAtom);
  const isLoading = useAtomValue(isLoadingAtom);
  const cls = cx(styles.location, className);
  const isMobile = useMediaQuery({ maxWidth: 400 });

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
        <Title
          size={isMobile ? "middle" : "large"}
          className={styles["city-name"]}
        >
          {city}
        </Title>
      )}
    </IconWithText>
  );
}
export default Location;
