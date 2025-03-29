import styles from "./Searchbar.module.scss";
import { useState, useEffect } from "react";
import { useSearchCities } from "../../../features/weather/index.ts";

function Searchbar() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const { data, isLoading, error } = useSearchCities(debouncedValue);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <input
      className={styles.searchbar}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your city..."
      type="text"
    />
  );
}

export default Searchbar;
