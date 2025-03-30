import styles from "./SearchResults.module.scss";
import { ISearchResults } from "./SearchResults.interface.ts";
import { Title } from "../../shared/ui/index.ts";
import cx from "classix";
import { useSetAtom } from "jotai";
import { cityAtom } from "../../shared/store/weatherAtoms.ts";

function SearchResults({
  cities,
  isLoading,
  className,
  style,
}: ISearchResults) {
  const cls = cx(styles.results, className);
  const setCity = useSetAtom(cityAtom);
  if (cities?.length === 0) {
    return (
      <ul className={cls} style={style}>
        <Title className={styles["no-results"]}>No results</Title>
      </ul>
    );
  }
  if (isLoading) {
    return (
      <ul className={cls} style={style}>
        <Title className={styles.loading}>Loading...</Title>
      </ul>
    );
  }
  return (
    <ul className={cls} style={style}>
      {cities?.map((city) => (
        <li
          key={city.id}
          className={styles.result}
          onClick={() => setCity(city.name + ", " + city.country)}
        >
          <Title className={styles["city-name"]}>
            {city.name}, {city.country}
          </Title>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
