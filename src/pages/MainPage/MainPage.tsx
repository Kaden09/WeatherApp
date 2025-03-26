import styles from "./MainPage.module.scss";
import { WeatherCardsList } from "../../widgets/index.ts";
import { Location, AdditionalInfo } from "../../shared/ui/index.ts";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Location />
      <AdditionalInfo />
      <WeatherCardsList />
    </div>
  );
}

export default MainPage;
