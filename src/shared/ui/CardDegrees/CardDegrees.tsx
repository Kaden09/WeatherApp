import styles from "./CardDegrees.module.scss";
import { Text, Title } from "../index.ts";
import { ICardDegrees } from "./CardDegrees.interface.ts";

function CardDegrees({ degrees, color, time }: ICardDegrees) {
  return (
    <div className={styles["card-degrees"]}>
      <Text color="secondary" size="small">
        {time}
      </Text>
      <Title color={color} size="middle">
        {degrees}°
      </Title>
    </div>
  );
}

export default CardDegrees;
