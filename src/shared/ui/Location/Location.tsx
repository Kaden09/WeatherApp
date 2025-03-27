import { Title, IconWithText } from "../index.ts";
import { LocationIcon } from "../../../assets/index.ts";
import { cityAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";
import styles from "./Location.module.scss";

function Location() {
  const city = useAtomValue(cityAtom);
  return (
    <IconWithText icon={<LocationIcon />} className={styles.location}>
      <Title size="large">{city}</Title>
    </IconWithText>
  );
}
export default Location;
