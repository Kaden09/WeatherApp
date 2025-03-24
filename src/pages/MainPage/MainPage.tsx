import styles from "./MainPage.module.scss";
import { WeatherCardsList } from "../../widgets/index.ts";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <WeatherCardsList />
    </div>
  );
}

export default MainPage;
