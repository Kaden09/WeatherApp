import styles from "./Location.module.scss";
import { Title } from "../index.ts";
import { LocationIcon } from "../../../assets/index.ts";
import { cityAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";

function Location() {
  const city = useAtomValue(cityAtom);
  return (
    <div className={styles.location}>
      <LocationIcon />
      <Title size="middle">{city}</Title>
    </div>
  );
}
export default Location;
