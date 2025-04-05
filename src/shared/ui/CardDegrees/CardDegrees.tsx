import styles from "./CardDegrees.module.scss";
import { Text, Title } from "../index.ts";
import { ICardDegrees } from "./CardDegrees.interface.ts";
import { useMediaQuery } from "react-responsive";

function CardDegrees({ degrees, color, time }: ICardDegrees) {
  const isMobile = useMediaQuery({ maxWidth: 400 });

  if (isMobile) {
    return (
      <div className={styles["card-degrees"]}>
        <Title color={color} size="middle">
          {degrees}°
        </Title>
      </div>
    );
  }

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
