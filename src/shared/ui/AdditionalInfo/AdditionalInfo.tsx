import { Title } from "../index.ts";
import styles from "./AdditionalInfo.module.scss";
import { IAdditionalInfo } from "./AdditionalInfo.interface.ts";

function AdditionalInfo({ item, value, units }: IAdditionalInfo) {
  return (
    <div className={styles["additional-info"]}>
      <Title size="middle" color="secondary">
        {item}:
      </Title>
      <Title size="middle">
        {value} {units}
      </Title>
    </div>
  );
}

export default AdditionalInfo;
