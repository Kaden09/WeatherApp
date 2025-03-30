import styles from "./Searchbar.module.scss";
import { useState, useEffect } from "react";
import { useSearchCities } from "../../features/weather/index.ts";
import { SearchResults } from "../index.ts";

function Searchbar() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const { data, isLoading, error } = useSearchCities(debouncedValue);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={styles["searchbar-container"]}>
      <input
        className={styles.searchbar}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setTimeout(() => {
            setFocus(false);
          }, 10);
        }}
        placeholder="Enter your city..."
        type="text"
      />
      <SearchResults
        cities={data}
        isLoading={isLoading}
        className={styles["search-results"]}
        style={{
          display: focus && value.length >= 3 ? "flex" : "none",
          opacity: focus && value.length >= 3 ? 1 : 0,
          pointerEvents: focus && value.length >= 3 ? "auto" : "none",
        }}
      />
    </div>
  );
}

export default Searchbar;
